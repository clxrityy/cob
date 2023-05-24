require('dotenv').config();
import { ExtendedClient } from "./structures/Client";
import { connectDb } from "./lib/database/db";

export const client = new ExtendedClient();

connectDb().then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`)
})
client.start();

import express from 'express';
import { port } from '../config.json';

const app = express();

app.get('/', (req, res) => {
    return res.sendFile('./src/index.html', { root: '.' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));