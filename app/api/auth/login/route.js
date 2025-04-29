import { User } from '../../../models/User';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export async function POST(req) {
  await connectDb();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response('User not found', { status: 404 });
  }

  // Verify password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return new Response('Invalid credentials', { status: 400 });
  }

  // Create JWT token (signing the token)
  const token = sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return new Response(JSON.stringify({ token }));
}
