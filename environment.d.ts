declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            guildId: string;
            firebaseApiKey: string;
            firebaseMessagingSenderId: string;
            firebaseAppId: string;
            firebaseMeasurementId: string;
            environment: "dev" | "prod" | "debug";
        }
    }
}

export { };