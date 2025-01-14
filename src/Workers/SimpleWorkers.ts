import { Job, Worker } from "bullmq";
import { SimpleJob } from "../jobs/SimpleJobs";
import redisConnection from "../config/redisConfig";

const simpleWorker = (queueName: string) => {
  console.log(`Worker for ${queueName} is running`);
  new Worker(
    queueName,
    async (job: Job) => {
      console.log(
        `Job Name: ${job.name}, Job Id: ${job.id}, Job Data: ${JSON.stringify(
          job.data
        )}`
      );
    },
    {
      connection: redisConnection,
    }
  );
 
};

export default simpleWorker;
