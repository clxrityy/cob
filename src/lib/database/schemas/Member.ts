import { DateResolvable } from "discord.js";
import mongoose from "mongoose";

interface IMember {
    id: string;
    guild: string;
    registeredAt: number;
    birthday: DateResolvable;
}

export const memberSchema = mongoose.model("Member", new mongoose.Schema<IMember>({
    id: { type: String },
    guild: { type: String },
    registeredAt: { type: Number, default: Date.now() },
    birthday: { type: String },
}));