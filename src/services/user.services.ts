import { User } from "../models";
import simpleProducer from "../producers/SampleProducer";

export class UserService {
  public async createUser(user: any) {
    const response = await user
    if(response){
        simpleProducer('user.created', response)
    }
    return response
  }

  public async getUserByEmail(email: string) {
    return {}
    }
}
