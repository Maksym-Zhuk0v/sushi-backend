import express from "express";
import {
  getAll,
  createBlog,
  getSingleBlog,
  changeBlog,
  deleteBlog,
} from "../controllers/BlogController.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getSingleBlog);
router.post("/", protectRoute, adminRoute, createBlog);
router.post("/:id", protectRoute, adminRoute, changeBlog);
router.delete("/:id", protectRoute, adminRoute, deleteBlog);

export default router;
