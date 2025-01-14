import { Job, Queue } from "bullmq";
import { queue } from "../Queues";
import { userService } from "../services";
import { simpleWorker } from "../Workers";
import logger from "../logger";

export class UserController {
  public async createUser(req: any, res: any) {
    try {
      logger.info("Creating a new user");
      const user = await userService.createUser(req.body);
      res.status(201).send(user);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public async getUserByEmail(req: any, res: any) {
    try {
      const user = await userService.getUserByEmail(req.params.email);
      res.status(200).send(user);
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  }

  public async getAllUsers(req: any, res: any) {
    try {
    const worker = simpleWorker("SampleQueue")
     const users = await []
     const results = users.map(async (job: Job) => {
        return {
          jobId: job.id,
          result: job.returnvalue
        }
      })
      res.status(200).send(results);
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  }
}
