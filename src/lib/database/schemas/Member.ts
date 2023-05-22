import mongoose from "mongoose";

export const memberSchema = mongoose.model("Member", new mongoose.Schema({
    id: { type: String },
    guild: { type: String },
    registeredAt: { type: Number, default: Date.now() },
    inventory: {
        type: Object, default: {
            tools: {
                type: Object, default: {
                    
                }
            },
            achievements: {
                type: Object, default: {

                }
            },
            catches: {
                type: Object, default: {

                }
            },
        }
    }
}));