import { EmailSender } from "../../mail-microservice/domain/MailSender";
import { GetUserRepo } from "../domain/GetUserRepo";

class SendMailUC {
  constructor(
    private readonly emailSender: EmailSender,
    private getUserRepo: GetUserRepo
  ) {}
  
  async sendToUser(userId: number, message: string): Promise<void> {
    await this.emailSender.sendMessage(this.getUserRepo.getMail(userId), message);
  }
}

export default SendMailUC;