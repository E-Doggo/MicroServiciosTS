import { UserDTO } from "./UserDTO";

export interface GetUserRepo {
  get(userId: number): UserDTO;
  getMail(userId: number): string;
}
