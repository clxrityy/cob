import { birthdaySchema } from "../database/schemas/Birthday";

export async function fetchGuildBirthdays (guildID: string) {
    const birthdays = await birthdaySchema.find({ guildId: guildID });

    if (birthdays) {
        return birthdays.map((user) => 
            user.userId + ' : ' + "**" + user.birthday + "**" + '\n');
    } else {
        return 'No birthdays in this guild!';
    }
}
