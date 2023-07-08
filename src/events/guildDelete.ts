import { deleteGuild } from "../lib/database/db";
import { Event } from "../structures/Event";

export default new Event('guildDelete', async (guild) => {
    if (guild.delete) {
        await deleteGuild(guild.id);
    } else {
        return;
    }
});