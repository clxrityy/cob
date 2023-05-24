import { Event } from "../structures/Event";

export default new Event('error', async (error) => {
    if (error) {
        console.log(`
            [COB ERROR] There was an error with the bot! See below for all the details. ${'\n'}
            **ERROR: ${'\n'}
            ${error.name}
            ${'\n'}
            **MESSAGE: ${'\n'}
            ${error.message}
            ${'\n'}
            **STACK: ${'\n'}
            ${error.stack}
            ${'\n'}
            **CAUSE: ${'\n'}
            ${error.cause}
        `)
    }
})