import { Job } from "bullmq";

export interface IJob {
    name: string,
    payload?: Record<string, unknown>,
    handle: (job?: Job, array?: any[]) => any[],
    failed: (job?: Job) => void,
}