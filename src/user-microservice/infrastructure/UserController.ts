import GetUserUC from "../application/GetUseCase";
import { GetUserRepo } from "../domain/GetUserRepo";
import { Request, Response } from "express";

class UserController {
  private getUseCase: GetUserUC;
  constructor(repository: GetUserRepo) {
    this.getUseCase = new GetUserUC(repository);
  }

  getUser(req: Request, res: Response) {
    const numberId = req.body.userId;
    const plan = this.getUseCase.getUser(numberId);
    res.status(200).json(plan);
  }
}

export default UserController;
