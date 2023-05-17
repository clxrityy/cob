import { Command } from "../../structures/Command";

export default new Command({
    name: 'ping',
    description: 'Displays the ping of the bot.',
    run: async ({ interaction }) => {
        interaction.followUp('Pong');
    }
})