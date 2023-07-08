import mongoose from "mongoose";
import { userSchema } from "./schemas/User";
import { guildSchema } from "./schemas/Guild";
import { memberSchema } from "./schemas/Member";
import { birthdaySchema } from "./schemas/Birthday";
import { DateResolvable } from "discord.js";

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

export async function fetchMember(userID: string, guildID: string) {
    let memberDB = await memberSchema.findOne({ id: userID, guildID: guildID });

    if (memberDB) {
        return memberDB;
    } else {
        memberDB = new memberSchema({
            id: userID,
            guild: guildID,
            registeredAt: Date.now(),
        });

        await memberDB.save().catch(err => console.log(err));
        return memberDB;
    }
};

export async function fetchBirthday(userID: string, guildID: string) {
    let birthdayUser = await birthdaySchema.findOne({ userId: userID, guildId: guildID });

    if (birthdayUser) {
        return birthdayUser.birthday;
    } else {
        birthdayUser = new birthdaySchema({
            userId: userID,
            guildId: guildID,
        });

        await birthdayUser.save().catch(err => console.log(err));
        return birthdayUser.birthday;
    }
};

export async function setBirthday(userID: string, guildID: string, birthday: DateResolvable) {
    let birthdayUser = await birthdaySchema.findOne({ userId: userID, guildId: guildID });
    let user = await memberSchema.findOne({ id: userID, guild: guildID });

    if (birthdayUser && user) {
        birthdayUser.birthday = birthday.toString();
        await birthdayUser.save().catch(err => console.log(err));
        user.birthday = birthday.toString();
        await user.save().catch(err => console.log(err));
        return birthdayUser;
    } else if (user) {
        birthdayUser = new birthdaySchema({
            userId: userID,
            guildId: guildID,
            birthday: birthday.toString()
        });

        await birthdayUser.save().catch(err => console.log(err));
        return birthdayUser;
    } else {
        birthdayUser = new birthdaySchema({
            userId: userID,
            guildId: guildID,
            birthday: birthday.toString()
        });
        user = new memberSchema({
            id: userID,
            guild: guildID,
            registeredAt: Date.now(),
            birthday: birthday.toString()
        })

        await birthdayUser.save().catch(err => console.log(err));
        await user.save().catch(err => console.log(err));
        return birthdayUser;
    }
};

export async function isAlreadyBirthday(userID: string, guildID: string) {
    let birthdayUser = await birthdaySchema.findOne({ userID, guildID });
    if (birthdayUser) {
        return birthdayUser;
    } else {
        return false;
    }
}

export async function deleteGuild(guildID: string) {
    let guild = await guildSchema.findOne({ id: guildID });

    if (guild) {
        await guild.deleteOne(guild._id);
    } else {
        return false;
    }
}