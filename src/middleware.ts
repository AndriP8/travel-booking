import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/rooms")) {
    return Response.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: ["/rooms"],
};
