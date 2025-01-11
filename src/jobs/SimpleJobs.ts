import { Job } from "bullmq";
import { IJob } from "../types";

class SimpleJob implements IJob {
  name: string;
  payload: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.name = this.constructor.name;
    this.payload = payload;
  }
  handle = (job?: Job): void => {
    if(job){
        console.log(`Job Name: ${job.name}, Job Id: ${job.id}, Job Data: ${JSON.stringify(job.data)}`)
    }
  };
  failed = (job?: Job): void => {
    if(job){
      console.log("Failed the job")
    }
  };
}

export { SimpleJob };
