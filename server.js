import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import mailRoutes from "./routes/mail.route.js";
import blogRoutes from "./routes/blog.route.js";

dotenv.config();
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/blog", blogRoutes);
app.use("/api/user", userRoutes);
app.use("/api/mail", mailRoutes);

try {
  app.listen(PORT, () => {
    connectDB();
  });
} catch (error) {
  console.log("Error connecting to server", error.message);
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
