export const config = { matcher: ["/payment/:path*", "/profile/:path*"] }
import { withAuth } from "next-auth/middleware";
import {  NextResponse } from "next/server";


export default withAuth(
    function middleware(request) {

        if(request.nextUrl.pathname.startsWith('/payment', )) {
            if(request.nextauth.token) {
                return NextResponse.next()
            }
            if(request.nextauth.token == null) {
                return NextResponse.redirect(new URL('/auth/login', request.url))
            }
            
        }
    }
)