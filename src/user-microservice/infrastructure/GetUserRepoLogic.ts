import { UserDTO } from "../domain/UserDTO";
import { GetUserRepo } from "../domain/GetUserRepo";

class GetUserPostgreSQL implements GetUserRepo {
  get(userId: number): UserDTO {
    const newUser = {
      name: "Rodrigo",
      lastname: "Guardia",
      mail: "rodrigo@gmail.com",
      birthDate: new Date(),
      CI: 9352812,
    };
    return newUser;
  }
  getMail(userId: number): string {
    return "Some@gmail.com";
  }
}
