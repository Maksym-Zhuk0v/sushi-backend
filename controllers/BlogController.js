import Blog from "../models/blog.module.js";

export const getAll = async (req, res) => {
  try {
    const blogs = await Blog.find({});

    res.json(blogs);
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, image, body, lastModified } = req.body;

    const blog = await Blog.create({
      title,
      image,
      body,
      lastModified,
    });
    res.status(201).json({
      blog,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id: productId } = req.params;

    const blog = await Blog.findById(productId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const changeBlog = async (req, res) => {
  try {
    const { id: productId } = req.params;

    const { title, image, body, lastModified } = req.body;

    const blog = await Blog.findByIdAndUpdate(
      productId,
      {
        title,
        image,
        body,
        lastModified,
      },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json("Blog updated successfully");
  } catch (error) {
    console.log("Error in refreshToken controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id: productId } = req.params;

    await Blog.findByIdAndDelete(productId);

    res.json("Blog deleted successfully");
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
