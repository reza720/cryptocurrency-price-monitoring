import dotenv from 'dotenv';
import path from 'path';
import { en } from 'zod/locales';

dotenv.config({
    path: path.join(process.cwd(), '.env'),
});

const env = {
    databaseUrl: process.env.DATABASE_URL,
    gmailUser: process.env.GMAIL_USER,
    gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
};

export default env;