import { resolve } from "path";
import { inject, injectable } from "tsyringe";
import { v4 as uuid } from "uuid";

import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUserTokenRepository } from "@modules/accounts/repositories/IUserTokenRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { AppError } from "@shared/errors/AppErrors";

@injectable()
class SendForgotPasswordMailUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("UserTokenRepository")
    private userTokenRepository: IUserTokenRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("MailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists");
    }

    const token = uuid();

    const expires_date = this.dateProvider.addHours(3);

    await this.userTokenRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date,
    });

    const templatePath = resolve(
      __dirname,
      "..",
      "..",
      "views",
      "email",
      "forgotPassword.hbs"
    );

    const variables = {
      name: user.name,
      link: `${process.env.FORGOT_MAIL_URL}=${token}`,
    };

    await this.mailProvider.sendMail(
      email,
      "Recuperação de senha",
      variables,
      templatePath
    );
  }
}

export { SendForgotPasswordMailUseCase };
