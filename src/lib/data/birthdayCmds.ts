import { EmbedBuilder } from "discord.js";

export const birthdayCmdEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setDescription("**Birthday Commands:**"
        + '\n' + '\n' +
        '`/birthday set [MM/DD/YYYY]`' + '\n' +
        '> Set your birthday (you can only do this once!)' + '\n' +
        '`/birthday list`' + '\n' +
        '> List all birthdays in the current guild'
    )
    .setTimestamp()
    .setFooter({ text: 'Admin: /birthday admin', iconURL: 'https://cdn.discordapp.com/attachments/939974049361190912/1108454358544302110/cob.png' });