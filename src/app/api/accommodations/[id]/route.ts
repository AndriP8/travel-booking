import db from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  route: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await route.params;
    const { rows } = await db.query(
      `
        SELECT 
          a.*,
          h.id as host_id,
          h.name,
          h.picture_url,
          h.created_at,
          h.about
        FROM 
          accommodations AS a
        LEFT JOIN 
          hosts AS h ON a.host_id = h.id
        WHERE a.id = $1
      `,
      [id],
    );

    const { host_id, name, picture_url, created_at, about, ...accommodation } =
      rows[0];

    return NextResponse.json({
      data: {
        ...accommodation,
        hosts: {
          id: host_id,
          name,
          picture_url,
          created_at,
          about,
        },
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
