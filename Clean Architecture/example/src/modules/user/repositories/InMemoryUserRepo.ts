import { User } from "../entities/User";
import { IUserRepository } from "./IUserRepository";

export class InMemoryUserRepo implements IUserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }
}
