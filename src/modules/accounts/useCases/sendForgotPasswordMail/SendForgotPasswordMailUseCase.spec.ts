import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UserTokenRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserTokenRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let userTokenRepositoryInMemory: UserTokenRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProviderInMemory: MailProviderInMemory;

describe("Send forgot mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    userTokenRepositoryInMemory = new UserTokenRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    mailProviderInMemory = new MailProviderInMemory();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      userTokenRepositoryInMemory,
      dateProvider,
      mailProviderInMemory
    );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProviderInMemory, "sendMail");

    await usersRepositoryInMemory.create({
      email: "febij@idofino.edu",
      name: "Leroy Ryan",
      password: "12345678",
      driver_license: "4124152",
    });

    await sendForgotPasswordMailUseCase.execute("febij@idofino.edu");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("febij@idofino.edu")
    ).rejects.toEqual(new AppError("User does not exists"));
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(userTokenRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      email: "febij@idofino.edu",
      name: "Leroy Ryan",
      password: "12345678",
      driver_license: "4124152",
    });

    await sendForgotPasswordMailUseCase.execute("febij@idofino.edu");

    expect(generateTokenMail).toHaveBeenCalled();
  });
});
