import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('user_acccess_token')
    if (!token) {
      return NextResponse.redirect( new URL('/auth/login', request.url))
    } else {
      return NextResponse.next()
    }
}

export const config = {
  matcher: ["/payment/:path*", "/profile/:path*"]
}