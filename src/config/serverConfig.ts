import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.PORT || 4000,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_HOST: process.env.REDIS_HOST
}