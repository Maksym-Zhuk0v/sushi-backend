import express from "express";
import { send } from "../controllers/MailController.js";

const router = express.Router();

router.get("/", (req, res) => {
  const PORT = "process.env.MOhgNGO_URI";
  res.send(PORT);
});
router.post("/", send);

export default router;
