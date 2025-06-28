import express from "express";
import Tutor from "../models/Tutor.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Create tutor profile
router.post("/create", verifyToken, async (req, res) => {
  const { name, bio, subjects, availability } = req.body;

  try {
    const newTutor = new Tutor({
      name,
      bio,
      subjects,
      availability,
      userId: req.user.id
    });

    await newTutor.save();
    res.status(201).json(newTutor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all tutors
router.get("/", async (req, res) => {
  try {
    const tutors = await Tutor.find().sort({ createdAt: -1 });
    res.json(tutors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
