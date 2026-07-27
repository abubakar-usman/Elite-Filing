import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { SubscriberSchema } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = SubscriberSchema.safeParse(body);

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

    const { subscriber, isNew } = db.createSubscriber(validated.data);

    return NextResponse.json(
      {
        success: true,
        message: isNew ? "Subscribed successfully" : "Email already subscribed",
        data: subscriber,
      },
      { status: isNew ? 201 : 200 }
    );
  } catch (error) {
    console.error("API error POST /api/subscribe:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
