import express from "express";
import { send } from "../controllers/MailController.js";

const router = express.Router();

router.post("/", send);

export default router;
