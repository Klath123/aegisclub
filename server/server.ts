import "dotenv/config";
import express, { type Request, type Response, type NextFunction } from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { registrationRouter } from "./routes/registration.ts";

const app = express();
const PORT = Number(process.env["PORT"] ?? 5000);
const MONGODB_URI = process.env["MONGODB_URI"] ?? "mongodb://localhost:27017/glitchcraft";
const FRONTEND_URL = process.env["FRONTEND_URL"] ?? "http://localhost:5173";
const IS_PROD = process.env["NODE_ENV"] === "production";

// ── Security middleware ────────────────────────────────────────────────────
app.use(helmet());
app.use(morgan(IS_PROD ? "combined" : "dev"));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["https://www.aegisclub.site/","https://aegisclub.netlify.app/","http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);



// ── Routes ────────────────────────────────────────────────────────────────
app.use("/api", registrationRouter);

app.get("/health", (_req: Request, res: Response): void => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── 404 ───────────────────────────────────────────────────────────────────
app.use((_req: Request, res: Response): void => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ── Global error handler ──────────────────────────────────────────────────
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: IS_PROD ? "Internal server error" : err.message,
  });
});

// ── Database + start ──────────────────────────────────────────────────────
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
};

const start = async (): Promise<void> => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Glitchcraft API running on http://localhost:${PORT}`);
    console.log(`📋 Environment: ${IS_PROD ? "production" : "development"}`);
  });
};

// ── Graceful shutdown ─────────────────────────────────────────────────────
const shutdown = async (): Promise<void> => {
  console.log("\n🛑 Shutting down gracefully...");
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
};

process.on("SIGINT",  () => void shutdown());
process.on("SIGTERM", () => void shutdown());

void start();

export { app };