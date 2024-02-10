import mongoose, { Schema, mongo } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
    },
    isPublished: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
export const Video = mongoose.model("Video", videoSchema);
