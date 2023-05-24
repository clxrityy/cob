import { ApplicationCommandOptionType, User } from "discord.js";
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

        const userId = interaction.user.id;
        const guildId = interaction.guild.id;

        // set
        if (interaction.options.get('set') != null) {
            const setRes = interaction.options.get('set').value as string;
            const birthdayRaw = setRes.split('/') as string[];
            const month = Number(birthdayRaw[0]);
            const day = Number(birthdayRaw[1]);
            const year = Number(birthdayRaw[2]);
            const birthday = `${month}/${day}/${year}`;
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
        }
        
        // user
        if (interaction.options.get('user') != null) {
            const target = interaction.options.get('user').user.id;
            if (isAlreadyBirthday(target, guildId)) {
                const birthday = await fetchBirthday(target, guildId);
                await interaction.followUp(`${interaction.options.get("user").user}'s birthday: **${birthday}**`)
            } else {
                await interaction.followUp(`${interaction.options.get('user').user} has not set their birthday!`)
            }
        }

        // default
        await fetchMember(userId, guildId);
        await fetchBirthday(userId, guildId);
    },
})