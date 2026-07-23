import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { ConsultationBookingSchema } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = ConsultationBookingSchema.safeParse(body);

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

    const booking = db.createBooking(validated.data);

    return NextResponse.json(
      {
        success: true,
        message: "Consultation booked successfully",
        data: {
          bookingId: booking.id,
          name: booking.name,
          email: booking.email,
          createdAt: booking.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error /api/consultation:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
