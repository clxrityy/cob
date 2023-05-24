import { ApplicationCommandOptionType } from "discord.js";
import { birthdayCmdEmbed } from "../../lib/data/birthdayCmds";
import { fetchBirthday, fetchMember, isAlreadyBirthday, setBirthday } from "../../lib/database/db";
import { Command } from "../../structures/Command";
import { birthdayOptions } from "../../lib/data/birthdayOptions";

export default new Command({
    name: 'bd',
    description: 'All the birthday commands.',
    options: [
        {
            name: 'set',
            description: 'Set your birthday! (can only do it once)',
            type: ApplicationCommandOptionType.String,
        },
        {
            name: 'list',
            description: 'List all the guild birthdays!',
            type: ApplicationCommandOptionType.String,
            required: false,
            autocomplete: true,
        },
        {
            name: 'user',
            description: "See a specific user's birthday!",
            type: ApplicationCommandOptionType.User,
            required: false,
        }

    ],
    run: async ({ interaction }) => {

        const birthdayRes = interaction.options.get('set').value as string;
        const birthdayRaw = birthdayRes.split('/') as string[];
        const month = Number(birthdayRaw[0]);
        const day = Number(birthdayRaw[1]);
        const year = Number(birthdayRaw[2]);
        const birthday = `${month}/${day}/${year}`;
        const userId = interaction.user.id;
        const guildId = interaction.guild.id;

        // default
        await fetchMember(userId, guildId);
        await fetchBirthday(userId, guildId);

        // set
        if (birthdayOptions(month, day, year) != false) {
            if (await isAlreadyBirthday(userId, guildId) != false) {
                await interaction.followUp("You have already set your birthday!");
            } else {
                await setBirthday(userId, guildId, birthday);
                await interaction.followUp(`Birthday set as ${month}/${day}/${year}`);
            }
        } else {
            await interaction.followUp("You didn't provide your birthday correctly!")
        }

        // user

    },
})