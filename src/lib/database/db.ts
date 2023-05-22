import mongoose from "mongoose";
import { userSchema } from "./schemas/User";
import { guildSchema } from "./schemas/Guild";
import { memberSchema } from "./schemas/Member";

export const connectDb = async () => {
    mongoose.connect(process.env.MONGO_URI || '');
}

export async function fetchUser(key: string) {
    let userDB = await userSchema.findOne({ id: key });

    if (userDB) {
        return userDB;
    } else {
        userDB = new userSchema({
            id: key,
            registeredAt: Date.now()
        });
        await userDB.save().catch(err => console.log(err));
        return userDB;
    }
};

export async function fetchGuild(key: string) {
    let guildDB = await guildSchema.findOne({ id: key });

    if (guildDB) {
        return guildDB;
    } else {
        guildDB = new guildSchema({
            id: key,
            registeredAt: Date.now()
        });
        await guildDB.save().catch(err => console.log(err));
        return guildDB;
    }
};

export async function fetchMember(userID:string, guildID: string) {
    let memberDB = await memberSchema.findOne({ id: userID, guildID: guildID });

    if (memberDB) {
        return memberDB;
    } else {
        memberDB = new memberSchema({
            id: userID,
            guild: guildID,
            registeredAt: Date.now(),
            inventory: {
                tools: {
                    default: true,
                }
            },
        });

        await memberDB.save().catch(err => console.log(err));
        return memberDB;
    }
};



