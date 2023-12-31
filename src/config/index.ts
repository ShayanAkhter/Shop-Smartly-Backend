import dotenv from "dotenv";
dotenv.config()

export const PORT = process.env.PORT;
export const MONGODB_URL = process.env.MONGODB_URL;
export const DEBUG = process.env.DEBUG;
export const SECRET_KEY = process.env.SECRET_KEY;