import { ApplicationCommandOptionType } from "discord.js";
import { birthdayCmdEmbed } from "../../lib/data/birthdayCmds";
import { fetchMember, setBirthday } from "../../lib/database/db";
import { Command } from "../../structures/Command";

export default new Command({
    name: 'bd',
    description: 'All the birthday commands.',
    options: [
        {
            name: 'set',
            description: 'Set your birthday! (can only do it once)',
            type: ApplicationCommandOptionType.String,
            required: false,
            autocomplete: true,
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

        const birthday = interaction.options.get('set').value as string;

        // await interaction.followUp({ embeds: [birthdayCmdEmbed] });
        // await fetchMember(interaction.user.id, interaction.guildId);
        await interaction.followUp(`${birthday}`);
        await setBirthday(interaction.user.id, interaction.guild.id, birthday);
    },
})