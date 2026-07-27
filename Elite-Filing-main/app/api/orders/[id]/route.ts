import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { OrderFiling } from "@/lib/db/schema";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const order = db.getOrderById(id);

    if (!order) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: order });
  } catch (error) {
    console.error("API error GET /api/orders/[id]:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    const validStatuses: OrderFiling["status"][] = [
      "submitted",
      "name_reservation",
      "doc_verification",
      "government_processing",
      "ein_vat_issuance",
      "completed",
    ];

    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status value provided" },
        { status: 400 }
      );
    }

    const updated = db.updateOrderStatus(id, status);

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Order status updated to ${status}`,
      data: updated,
    });
  } catch (error) {
    console.error("API error PATCH /api/orders/[id]:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
