import mongoose from "mongoose";

export const guildSchema = mongoose.model("Guild", new mongoose.Schema({
    id: { type: String },
    registeredAt: { type: Number, default: Date.now() },
    settings: {
        type: Object, default: {
            general: {
                channel: { type: String, default: null },
                modRole: { type: String, default: null },
                adminRole: { type: String, default: null },
            },
            leveled_roles: {
                enabled: false,
                roles: {
                    type: Object, default: {
                        one: { type: String, default: null },
                        two: { type: String, default: null },
                        three: { type: String, default: null },
                        four: { type: String, default: null },
                    }
                },
                experience: {
                    type: Object, default: {
                        enabled: true,
                        onChat: {
                            type: Object, default: {
                                enabled: true,
                                onlyInChannel: true, // Only if channel is specified
                                persistence: {
                                    type: Object, default: {
                                        enabled: true,
                                        random: false, // Random experience value from Max & Min specified (can't be enabled with countCharacters)
                                        everyMsg: false, // Gives experience for every message sent
                                        countCharacters: true, // Gives more experience depending on the characters in the message (can't be enabled with random)
                                        max: { type: Number, default: 50 },
                                        min: { type: Number, default: 5 },
                                    }
                                }
                            }
                        },
                        onVoice: false, // Not set up by default
                    }
                }
            },
            catches: {
                type: Object, default: null,
            }
        }
    }
}));