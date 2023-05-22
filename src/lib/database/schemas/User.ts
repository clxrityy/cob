import mongoose from "mongoose";

export const userSchema = mongoose.model("User", new mongoose.Schema({
    id: { type: String },
    registeredAt: { type: Number, default: Date.now() }
}));