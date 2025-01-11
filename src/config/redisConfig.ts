import Redis from "ioredis";
import config from "./serverConfig"


const redisConfig = {
    port: parseInt(config.REDIS_PORT || "6397", 10),
    host: config.REDIS_HOST,
    maxRetriesPerRequest: null,
}


const redisConnection = new Redis(redisConfig);

export default redisConnection;