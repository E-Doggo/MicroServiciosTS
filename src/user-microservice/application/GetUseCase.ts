import { GetUserRepo } from "../domain/GetUserRepo";

class GetUserUC {
  constructor(private getUserRepo: GetUserRepo) {}

  getUser(userId: number) {
    return this.getUserRepo.get(userId);
  }

  getUserMail(userId: number) {
    return this.getUserRepo.getMail(userId);
  }
}
