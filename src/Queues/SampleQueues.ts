import { Queue } from "bullmq";
import redisConnection from "../config/redisConfig";

const queue = new Queue(
    "SampleQueue", {
        connection: redisConnection
    }
);
export default queue
