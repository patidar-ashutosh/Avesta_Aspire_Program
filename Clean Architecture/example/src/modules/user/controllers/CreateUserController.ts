import { Request, Response } from "express";
import { CreateUserUseCase } from "../use-cases/CreateUserUseCase";

export class CreateUserController {
  constructor(private useCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, email } = req.body;
    try {
      const user = await this.useCase.execute({ name, email });
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}
