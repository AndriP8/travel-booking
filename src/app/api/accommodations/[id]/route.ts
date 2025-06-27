import db from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  route: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await route.params;
    const { rows } = await db.query(
      "SELECT * FROM accommodations where id = $1",
      [id],
    );

    return NextResponse.json({
      data: rows[0],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
