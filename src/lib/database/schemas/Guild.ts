import mongoose from "mongoose";

interface IGuild {
    id: string;
    registeredAt: number;
    settings: object;
}

export const guildSchema = mongoose.model("Guild", new mongoose.Schema<IGuild>({
    id: { type: String },
    registeredAt: { type: Number, default: Date.now() },
    settings: {
        type: Object, default: {
            general: {
                channel: { type: String, default: null },
                modRole: { type: String, default: null },
                adminRole: { type: String, default: null },
            },
            birthday: {
                enabled: { type: Boolean, default: true },
                birthdayRole: { type: String, default: null },
                requiredRole: {
                    type: Object, default: {
                        enabled: true,
                        role: null,
                    }
                },
            }
        }
    }
}));