import { UserDTO } from "./UserDTO";

export interface UpdateUserRepo {
  update(userId: number, new_user: UserDTO): void;
}
