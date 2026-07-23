import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query } = body;

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Order ID or Email parameter is required" },
        { status: 400 }
      );
    }

    const order = db.trackFiling(query);

    if (!order) {
      return NextResponse.json(
        {
          success: false,
          error: "No filing record found for the provided Order ID or Email.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error("API error POST /api/track:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
