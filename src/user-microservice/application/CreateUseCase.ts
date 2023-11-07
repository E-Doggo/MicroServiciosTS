import { UserDTO } from "../domain/UserDTO";
import { CreateUserRepo } from "../domain/CreateUserRepo";

class CreateUserUC {
  constructor(private createUserRepo: CreateUserRepo) {}

  createUser(user: UserDTO) {
    return this.createUserRepo.create(user);
  }
}
