import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  subjects: [String],
  availability: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

export default mongoose.model("Tutor", tutorSchema);
