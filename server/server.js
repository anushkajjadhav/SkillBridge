import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from './routes/auth.routes.js';
import testRoutes from './routes/test.routes.js';
import tutorRoutes from './routes/tutor.routes.js';

import { verifyToken } from "./middleware/auth.js"; // ⬅️ For protected route

dotenv.config();
console.log("🔐 JWT_SECRET loaded:", process.env.JWT_SECRET);

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/tutors", tutorRoutes);
app.use("/api", testRoutes); // If test.routes.js has /protected

// ✅ Optional inline protected test route
app.post("/api/protected", verifyToken, (req, res) => {
  res.json({ message: `Hello user ${req.user.id}, this route is protected!` });
});

// ✅ DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// ✅ Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
