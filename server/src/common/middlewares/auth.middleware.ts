import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { Header } from 'src/common/utils/header';
import { Token } from 'src/common/utils/token';
import { TokenResultDTO } from 'src/modules/auth/dtos/token-result.dto';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  async use(request: Request, response: Response, next: NextFunction) {
    const HEADER: Header = new Header(request, response);
    const TOKEN: Token = new Token(this.configService, this.jwtService);
    const [ACCESS_TOKEN, REFRESH_TOKEN]: string[] = await Promise.all([
      HEADER.getAccessToken(),
      HEADER.getRefreshToken(),
    ]);
    const [RESULT_ACCESS, RESULT_REFRESH]: TokenResultDTO[] = await Promise.all(
      [
        TOKEN.validateAccessToken(ACCESS_TOKEN),
        TOKEN.validateRefreshToken(REFRESH_TOKEN),
      ],
    );
    if (!RESULT_ACCESS.verify && RESULT_REFRESH.verify) {
      throw new UnauthorizedException();
    }
    if (!RESULT_ACCESS.verify) {
      request.body.accessToken = await TOKEN.createAccessToken(RESULT_REFRESH);
      request.body.user = RESULT_REFRESH.idx;
      next();
    }
    if (!RESULT_REFRESH.verify) {
      request.body.refreshToken = await TOKEN.createRefreshToken(RESULT_ACCESS);
    }
    request.body.user = RESULT_ACCESS.idx;
    next();
  }
}
