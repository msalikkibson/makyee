import { NextResponse } from 'next/server';

export function middleware(request) {
  const headers = new Headers(request.headers);

  // Get the origin (protocol + hostname + port)
  const origin = request.headers.get('origin') || `${request.nextUrl.protocol}//${request.nextUrl.host}`;

  headers.set('x-origin', origin); // Set the origin header
  headers.set('x-current-path', request.nextUrl.pathname); // Keep pathname as well

  console.log("Origin (Middleware):", origin); // Log for debugging
  console.log("Pathname (Middleware):", request.nextUrl.pathname); // Log for debugging

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};