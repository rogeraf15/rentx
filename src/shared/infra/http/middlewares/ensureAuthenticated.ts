import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";
import { UserTokenRepository } from "@modules/accounts/infra/typeorm/repositories/UserTokenRepository";
import { AppError } from "@shared/errors/AppErrors";

export async function ensureAuthenticates(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  const userTokensRepository = new UserTokenRepository();

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [_, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, auth.secret_refresh_token);

    const user_id = String(sub);

    const user = await userTokensRepository.findByUserIdAndRefreshToken(
      user_id,
      token
    );

    if (!user) {
      throw new AppError("User does not exists", 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
