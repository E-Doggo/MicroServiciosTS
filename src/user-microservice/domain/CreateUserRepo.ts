import { UserDTO } from "./UserDTO";

export interface CreateUserRepo {
  create(user: UserDTO): void;
}
