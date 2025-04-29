import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  favourites: [
    {
      chapter: Number,
      verse: Number,
    }
  ],
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
