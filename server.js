import express from "express";
import path from "path";

// In ES modules, __dirname is not available, so we use this workaround to get it
const __dirname = path.resolve();

const app = express();

// Example of serving static files from a folder
app.use(express.static(path.join(__dirname, "public")));

// Example route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Set the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
