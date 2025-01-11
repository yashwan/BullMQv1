import { Job, Worker } from "bullmq"
import { SimpleJob } from "../jobs/SimpleJobs"
import redisConnection from "../config/redisConfig"


const simpleWorker = (queueName: string) => {
    new Worker(
        queueName,
        async (job: Job) => {
            if(job.name === "SampleJob"){
                const SampleJobInstance = new SimpleJob(job.data)
                SampleJobInstance.handle(job)
            }
        },{
            connection: redisConnection
        }
    )
}

export default simpleWorker