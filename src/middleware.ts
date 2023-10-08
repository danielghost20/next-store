import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token");
    if (cookie == undefined) {
        return NextResponse.redirect( new URL('/auth/login', request.url))
    } else {
      return NextResponse.next()
    }
}

export const config = {
  matcher: ["/payment/:path*"]
}