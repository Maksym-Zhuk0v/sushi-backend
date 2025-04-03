import express from "express";
import { send } from "../controllers/MailController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("mail route");
});
router.post("/", send);

export default router;
