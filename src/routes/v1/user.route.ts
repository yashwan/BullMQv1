import { userController } from "../../controllers";
import { Router } from "express";
import { userValidatorMiddleware } from "../../middleware";
import { UserDtoSchema } from "../../DataTransferObjects/users.dto";
const router = Router();

router.get("/event", userController.getAllUsers);
router.post("/", userValidatorMiddleware(UserDtoSchema), userController.createUser);
router.get("/:id", userController.getUserByEmail);
export default router ;