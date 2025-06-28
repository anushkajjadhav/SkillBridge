// routes/test.routes.js
import express from "express";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: `Hello user ${req.user.id}, this route is protected!` });
});

export default router;
