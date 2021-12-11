import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private massege: any[] = [];

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    this.massege.push({
      to,
      subject,
      variables,
      path,
    });
  }
}

export { MailProviderInMemory };
