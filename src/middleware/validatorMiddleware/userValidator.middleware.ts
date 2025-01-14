import { ZodSchema } from "zod";
import { UserDto } from "../../DataTransferObjects";
import { Request, Response, NextFunction } from "express";

const userValidatorMiddleware =
  (schema: ZodSchema<UserDto>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).json({ message: "Bad Request" });
    }
  };
export default userValidatorMiddleware;