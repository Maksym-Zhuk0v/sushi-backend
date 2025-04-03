import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import mailRoutes from "./routes/mail.route.js";
import blogRoutes from "./routes/blog.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/blog", blogRoutes);
app.use("/api/user", userRoutes);
app.use("/api/mail", mailRoutes);

try {
  app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
    connectDB();
  });
} catch (error) {
  console.log("Error connecting to server", error.message);
}
