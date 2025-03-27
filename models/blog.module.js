import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    image: {
      type: String,
      required: [true, "image url is required"],
    },
    lastModified: {
      type: Number,
      default: Date.now(),
    },
    body: {
      type: [
        {
          bodyTitle: String,
          bodyDescription: String,
        },
      ],
      required: [true, "body is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;
