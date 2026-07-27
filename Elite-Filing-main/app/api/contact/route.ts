import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ContactInquirySchema } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = ContactInquirySchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation Failed",
          details: validated.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const inquiry = db.createInquiry(validated.data);

    return NextResponse.json(
      {
        success: true,
        message: "Contact inquiry received successfully",
        data: {
          inquiryId: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          createdAt: inquiry.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error /api/contact:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
