import express from "express";
import uploadRoutes from "./routes/upload.route.js";

const app = express();

app.use(express.json());

app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Cloudinary Upload API Running 🚀");
});

export default app;
