import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using asynchronous operations
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const start = Date.now();

  // Run the built-in middleware or your custom logic here
  const res = NextResponse.next();

  // Measure the response time and add it to the response headers
  res.headers.set('X-Response-Time', `${Date.now() - start}ms`);

  // Log the response time
  console.log(
    `Request to ${req.nextUrl.pathname} took ${Date.now() - start}ms`
  );

  return res;
}

export const config = {
  matcher: '/',
};
