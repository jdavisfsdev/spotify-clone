// getToken checks for token in middleware between client and server after request is made
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // Token exists if user logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  //   destructure pathname off the request
  const { pathname } = req.nextUrl;

  //   Allow req if following is true...
  // 1)If its a req for next auth session
  // 2) Token exists
  if (pathname.includes('/api/auth') || token) {
    //   NextResponse.next() essentially means carry on, you're good to go
    return NextResponse.next();
  }
  //   Redirect to login if they dont have token AND are requesting a protected route
  if (!token && pathname !== '/login') {
    return NextResponse.redirect('/login');
  }
}
