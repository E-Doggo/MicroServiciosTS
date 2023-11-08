import { EmailSender } from "../domain/MailSender";
import { Logger } from "../domain/logger";

export class FakeEmailSender implements EmailSender {
  constructor(private readonly logger: Logger) {}

  async sendMessage(email: string, text: string): Promise<void> {
    this.logger.info(`Mandando un mail a: "${email}": ${text}`);
  }
}
