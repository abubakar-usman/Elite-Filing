import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { OrderFilingSchema } from "@/lib/db/schema";

export async function GET() {
  try {
    const orders = db.getOrders();
    return NextResponse.json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error) {
    console.error("API error GET /api/orders:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = OrderFilingSchema.safeParse(body);

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

    const order = db.createOrder(validated.data);

    return NextResponse.json(
      {
        success: true,
        message: "Filing order created successfully",
        data: order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error POST /api/orders:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
