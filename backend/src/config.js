import {  config as dotenv} from "dotenv";

dotenv()

console.log(process.env.NAME)
export const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}