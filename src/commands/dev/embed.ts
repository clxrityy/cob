import { EmbedBuilder } from "discord.js";
import { Command } from "../../structures/Command";

export default new Command({
    name: 'embed',
    description: 'Build a test embed',
    run: async ({ interaction }) => {

        const testEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Title')
            .setURL('https://mjanglin.com')
            .setAuthor({ name: 'Author', iconURL: interaction.user.avatarURL(), url: 'https://mjanglin.com' })
            .setDescription('Description')
            .setThumbnail('https://cdn.discordapp.com/attachments/939974049361190912/1108454358544302110/cob.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addFields({ name: 'Inline field title', value: 'Field value', inline: true })
            .setImage('https://cdn.discordapp.com/attachments/939974049361190912/1108454358544302110/cob.png')
            .setTimestamp()
            .setFooter({ text: 'Footer text here', iconURL: 'https://cdn.discordapp.com/attachments/939974049361190912/1108454358544302110/cob.png' });
        
        await interaction.followUp({ embeds: [testEmbed] });
    }
});

