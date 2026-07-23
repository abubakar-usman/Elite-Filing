"use server";

import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-06-24.dahlia" as const,
});

export async function createCheckoutSession(params: {
  userId: string;
  serviceName: string;
  priceAmount: number; // in USD or target currency
  currency?: string;
  companyName?: string;
  jurisdiction?: string;
  entityType?: string;
}) {
  try {
    const { userId, serviceName, priceAmount, currency = "usd", companyName, jurisdiction = "United States", entityType = "LLC" } = params;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return { success: false, error: "User not found." };
    }

    // Check or create Company record for user
    let company = await prisma.company.findFirst({
      where: { userId: user.id },
    });

    if (!company) {
      company = await prisma.company.create({
        data: {
          name: companyName || `${user.name || "Global"} Enterprise LLC`,
          jurisdiction,
          entityType,
          status: "Pending",
          userId: user.id,
        },
      });
    }

    // Create a Filing record in database
    const filing = await prisma.filing.create({
      data: {
        serviceName,
        status: "Pending",
        pricePaid: priceAmount,
        companyId: company.id,
      },
    });

    const origin = process.env.NEXTAUTH_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase().trim(),
            product_data: {
              name: `Elite Filing — ${serviceName}`,
              description: `Government formation & compliance package for ${company.name} (${jurisdiction})`,
            },
            unit_amount: Math.round(priceAmount * 100), // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: user.email,
      metadata: {
        filingId: filing.id,
        userId: user.id,
        companyId: company.id,
        serviceName,
      },
      success_url: `${origin}/dashboard?payment=success&filingId=${filing.id}`,
      cancel_url: `${origin}/pricing?payment=cancelled`,
    });

    return { success: true, url: session.url };
  } catch (error: unknown) {
    console.error("Stripe Checkout Action Error:", error);
    return { success: false, error: "Failed to initiate Stripe Checkout session." };
  }
}
