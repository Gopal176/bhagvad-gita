// app/middleware.js
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('token');

  if (!token) {
    return NextResponse.redirect('/login');
  }

  try {
    verify(token, process.env.JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect('/login');
  }
}
