"use server";

import { sendContactNotificationEmail } from "@/lib/email";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country: string;
  service: string;
  message: string;
}) {
  try {
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, error: "Please fill out all required fields." };
    }

    // Deliver email notification to ADMIN_EMAIL using Resend
    const resendResult = await sendContactNotificationEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      country: formData.country,
      service: formData.service,
      message: formData.message,
    });

    return {
      success: true,
      message: "Your message has been sent successfully.",
      resendResult,
    };
  } catch (error: unknown) {
    console.error("submitContactForm Server Action Error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
