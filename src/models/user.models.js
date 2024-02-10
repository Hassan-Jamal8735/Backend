import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
  },
  watchHistory: [
    {
      type: String,
      ref: "video",
    },
  ],
  password: {
    required: true,
  },
  refreshToken: {
    type: String,
  },
  timestamps: {
    required: true,
  },
});
export const User = mongoose.model("User", userSchema);
