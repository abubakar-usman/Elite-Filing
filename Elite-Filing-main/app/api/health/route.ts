import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const stats = db.getStats();
    return NextResponse.json({
      status: "operational",
      version: "1.0.0",
      timestamp: new Date().toISOString(),
      stats,
    });
  } catch (error) {
    console.error("API error GET /api/health:", error);
    return NextResponse.json({ status: "degraded", error: "Internal Server Error" }, { status: 500 });
  }
}
