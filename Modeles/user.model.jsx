import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
  photo: { type: String },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
