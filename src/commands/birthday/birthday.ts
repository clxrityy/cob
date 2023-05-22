import { birthdayCmdEmbed } from "../../lib/data/birthdayCmds";
import { fetchMember } from "../../lib/database/db";
import { Command } from "../../structures/Command";

export default new Command({
    name: 'birthday',
    description: 'All the birthday commands.',
    run: async ({ interaction }) => {
        await interaction.followUp({ embeds: [birthdayCmdEmbed] });
        await fetchMember(interaction.user.id, interaction.guildId);
    },
})