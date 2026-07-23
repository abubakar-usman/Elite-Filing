import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_AQk9aPN4_5RXwxTUDa6V8HAyMKW2BpyKN");

export async function sendWelcomeEmail(toEmail: string, userName: string, serviceName: string) {
  try {
    const data = await resend.emails.send({
      from: "Elite Filing <onboarding@resend.dev>",
      to: [toEmail],
      subject: `Welcome to Elite Filing — Next Steps for Your ${serviceName}`,
      html: `
        <div font-family: sans-serif; max-w-600px; margin: 0 auto; padding: 20px; color: #1e293b;">
          <h1 style="color: #f97316; font-size: 24px;">Welcome to Elite Filing, ${userName}!</h1>
          <p style="font-size: 15px; line-height: 1.6;">
            Thank you for purchasing <strong>${serviceName}</strong>. Your corporate filing application has been queued with our legal compliance team.
          </p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0f172a;">Required Next Steps:</h3>
            <ol style="margin-bottom: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Log into your <a href="${process.env.NEXTAUTH_URL || "http://localhost:3000"}/dashboard" style="color: #f97316;">Elite Filing Client Portal</a>.</li>
              <li style="margin-bottom: 8px;">Upload a clear copy of your Passport or National ID in the Document Center.</li>
              <li>Complete your company officer & registered agent details questionnaire.</li>
            </ol>
          </div>
          <p style="font-size: 13px; color: #64748b;">
            If you have any questions, reply directly to this email or contact hello@elitefiling.co.
          </p>
        </div>
      `,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Resend Email Error:", error);
    return { success: false, error };
  }
}

export async function sendContactNotificationEmail(data: {
  name: string;
  email: string;
  company?: string;
  country: string;
  service: string;
  message: string;
}) {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "abubakarbinusman007@gmail.com";
    const res = await resend.emails.send({
      from: "Elite Filing Lead <onboarding@resend.dev>",
      to: [adminEmail],
      subject: `New Lead Inquiry: ${data.name} (${data.service} - ${data.country})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1e293b;">
          <h2 style="color: #f97316;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${data.company || "N/A"}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Country:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${data.country}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Service:</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">${data.service}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f8fafc; border-left: 4px solid #f97316; border-radius: 4px;">
            <strong>Message:</strong><br />
            <p style="margin: 5px 0 0 0; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
    });
    return { success: true, res };
  } catch (error) {
    console.error("Resend Contact Email Error:", error);
    return { success: false, error };
  }
}
