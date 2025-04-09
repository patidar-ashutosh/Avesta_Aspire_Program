import { Router } from "express";
import { CreateUserController } from "./modules/user/controllers/CreateUserController";
import { CreateUserUseCase } from "./modules/user/use-cases/CreateUserUseCase";
import { InMemoryUserRepo } from "./modules/user/repositories/InMemoryUserRepo";

const routes = Router();
const userRepo = new InMemoryUserRepo();
const createUserUseCase = new CreateUserUseCase(userRepo);
const createUserController = new CreateUserController(createUserUseCase);

routes.post("/users", (req, res) => createUserController.handle(req, res));

export { routes };
