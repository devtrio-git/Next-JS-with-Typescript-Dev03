import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname, 'middle request');

    // real world example: check if user is authenticated
    // let isAuthenticated = request.cookies.get('session-token'); // replace with actual authentication check

    //    test example: check if user is authenticated
    let { searchParams } = new URL(request.url);
    let isAuthenticated = searchParams.get('token');


    // const { pathname } = request.nextUrl;
    // if (!isAuthenticated && (pathname === '/checkout' || pathname === '/merchant')) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }
    // else {
    //     return NextResponse.next();
    // }

    // with matchers
    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}


export const config = {
    matcher: [
        // '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
        '/merchant:path*',
        '/checkout:path*',
    ],
}