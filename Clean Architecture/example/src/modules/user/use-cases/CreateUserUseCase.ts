import { AppError } from "../../../shared/errors/AppError";
import { User } from "../entities/User";
import { IUserRepository } from "../repositories/IUserRepository";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async execute(data: { name: string; email: string }) {
    const user = new User(data.name, data.email);
    if (!user.isEmailValid()) {
      throw new AppError("Invalid email");
    }
    return await this.userRepo.create(user);
  }
}
