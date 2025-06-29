import db from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const location = searchParams.get("location");
    const amenities = searchParams.getAll("amenities");
    const page = parseInt(searchParams.get("page") || "1");
    const size = parseInt(searchParams.get("size") || "10");

    const query = `
      SELECT * FROM accommodations 
      WHERE 
        ($1::text IS NULL OR location ILIKE '%' || $1::text || '%' OR country ILIKE '%' || $1::text || '%')
        AND ($2::text[] IS NULL OR amenities @> to_jsonb($2))
      ORDER BY id
      LIMIT $3 OFFSET $4
    `;
    const offset = (page - 1) * size;
    const { rows } = await db.query(query, [
      location || null,
      amenities.length ? amenities : null,
      size,
      offset,
    ]);
    const total = rows.length > 0 ? Number(rows.length) : 0;
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
