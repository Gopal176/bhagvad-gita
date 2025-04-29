import { connectDB } from '../../../../lib/mongodb';
import { User } from '../../../models/User';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function POST(req) {
  try {
    await connectDB();

    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { chapter, verse } = await req.json();

    await User.findByIdAndUpdate(token.id, {
      $addToSet: { favourites: { chapter, verse } },
    });

    return NextResponse.json({ message: 'Verse added to favorites' });
  } catch (err) {
    console.error("❌ Favorite Add Error:", err);
    return NextResponse.json({ message: 'Error adding favorite' }, { status: 500 });
  }
}
