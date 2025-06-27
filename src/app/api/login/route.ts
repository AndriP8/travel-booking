import db from "@/app/db";
import * as jose from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const cookieStore = await cookies();
    const {
      rows: [user],
    } = await db.query("select * from users where email = $1", [email]);

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({
        alg: "HS256",
      })
      .setExpirationTime("15d")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));
    cookieStore.set("token", token);
    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
