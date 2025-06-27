import db from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("q");
    const location = searchParams.get("location");
    const country = searchParams.get("country");
    const amenities = searchParams.getAll("amenities");
    const page = parseInt(searchParams.get("page") || "1");
    const size = parseInt(searchParams.get("size") || "10");

    const query = `
      SELECT * FROM accommodations 
      WHERE 
        ($1::text IS NULL OR title ILIKE '%' || $1::text || '%')
        AND ($2::text IS NULL OR location = $2)
        AND ($3::text IS NULL OR country = $3)
        AND ($4::text[] IS NULL OR amenities @> to_jsonb($4))
      ORDER BY id
      LIMIT $5 OFFSET $6
    `;
    const offset = (page - 1) * size;
    const { rows } = await db.query(query, [
      q || null,
      location || null,
      country || null,
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
