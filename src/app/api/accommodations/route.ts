import db from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const { rows } = await db.query("SELECT * FROM accommodations", []);

    const page = parseInt(searchParams.get("page") || "1");
    const size = parseInt(searchParams.get("size") || "10");
    const total = rows.length;
    const total_pages = Math.ceil(total / size);

    return NextResponse.json({
      data: rows,
      pagination: {
        size,
        page,
        total_pages,
        total,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
