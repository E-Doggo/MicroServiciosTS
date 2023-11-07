import { UserDTO } from "../domain/UserDTO";
import { GetUserRepo } from "../domain/GetUserRepo";

class GetUserPostgreSQL implements GetUserRepo {
  get(userId: number): UserDTO {
    // Implemment logic for getting User from Postgres
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
    // Implement logic for searching and only returning the mail of an user on Postgres
    return "Some@gmail.com";
  }
}
