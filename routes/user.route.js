import express from "express";
import {
  login,
  logout,
  signup,
  refreshToken,
  getProfile,
  verify,
} from "../controllers/UserController.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);
router.post("/verify", protectRoute, verify);

export default router;
