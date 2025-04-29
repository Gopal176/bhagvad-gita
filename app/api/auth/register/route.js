import { connectDB } from '../../../../lib/mongodb.js'; // or use relative path if alias fails
import { User } from '../../../models/User.js';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await connectDB(); // <-- important
    const { username, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
  } catch (error) {
    console.error("❌ Register Error:", error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
  }
}
