import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { hostname } = request.nextUrl;
  const user = hostname.match(/^\w+/)?.[0];
  if (user && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(`/users/${user}`);
  }

  return NextResponse.next();
}
