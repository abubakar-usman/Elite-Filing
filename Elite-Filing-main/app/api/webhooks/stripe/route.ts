import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";
import { sendWelcomeEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2026-06-24.dahlia" as const,
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  try {
    if (process.env.STRIPE_WEBHOOK_SECRET && signature) {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } else {
      // In dev or test mode without webhook secret signature validation fallback
      event = JSON.parse(body) as Stripe.Event;
    }
  } catch (err: unknown) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Webhook signature error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const filingId = session.metadata?.filingId;
    const userId = session.metadata?.userId;
    const serviceName = session.metadata?.serviceName || "Company Formation";

    if (filingId) {
      // Update Filing status to Paid
      await prisma.filing.update({
        where: { id: filingId },
        data: {
          status: "Paid",
          pricePaid: (session.amount_total || 0) / 100,
        },
      });
    }

    if (userId) {
      // Create initial pending tasks for user
      await prisma.task.createMany({
        data: [
          {
            title: "Upload Government ID / Passport",
            description: "Required for corporate KYC and registered agent verification.",
            isCompleted: false,
            userId,
          },
          {
            title: "Provide Primary Company Name Preferences",
            description: "Specify top 3 name choices for state availability check.",
            isCompleted: false,
            userId,
          },
          {
            title: "Review & Sign Operating Agreement Draft",
            description: "Download and review initial governance documents.",
            isCompleted: false,
            userId,
          },
        ],
      });

      // Fetch user details and send welcome email
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (user && user.email) {
        await sendWelcomeEmail(user.email, user.name || "Founder", serviceName);
      }
    }
  }

  return NextResponse.json({ received: true });
}
