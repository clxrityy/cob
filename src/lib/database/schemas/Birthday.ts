import { DateResolvable } from "discord.js";
import mongoose from "mongoose";

interface IBirthday {
    userId: string;
    guildId: string;
    birthday: DateResolvable;
}

export const birthdaySchema = mongoose.model("Birthdays", new mongoose.Schema<IBirthday>({
    userId: { type: String },
    guildId: { type: String },
    birthday: { type: Number },
}));

