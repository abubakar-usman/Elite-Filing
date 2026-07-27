"use client";

import { useState } from "react";
import { createCheckoutSession } from "@/app/actions/stripe";
import { Loader2, CreditCard } from "lucide-react";
import { toast } from "sonner";

interface StripeCheckoutButtonProps {
  userId: string;
  serviceName: string;
  priceAmount: number;
  companyName?: string;
  buttonText?: string;
}

export function StripeCheckoutButton({
  userId,
  serviceName,
  priceAmount,
  companyName,
  buttonText = "Purchase Package with Stripe",
}: StripeCheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await createCheckoutSession({
        userId,
        serviceName,
        priceAmount,
        companyName,
      });

      if (!res.success || !res.url) {
        throw new Error(res.error || "Failed to initiate Stripe Checkout.");
      }

      // Redirect directly to Stripe Checkout URL
      window.location.href = res.url;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error with checkout";
      toast.error(msg);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-md text-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Redirecting to Stripe...</span>
        </>
      ) : (
        <>
          <CreditCard className="w-4 h-4" />
          <span>{buttonText}</span>
        </>
      )}
    </button>
  );
}
