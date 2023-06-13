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
    const { accessToken, refreshToken } = await HEADER.getAllTokens();
    const [validateAccess, validateRefresh]: TokenResultDTO[] =
      await Promise.all([
        TOKEN.validateAccessToken(accessToken),
        TOKEN.validateRefreshToken(refreshToken),
      ]);
    if (!validateAccess.verify && !validateRefresh.verify) {
      throw new UnauthorizedException();
    }
    if (!validateAccess.verify) {
      request.body.accessToken = await TOKEN.createAccessToken(validateRefresh);
      request.body.user = validateRefresh.idx;
      next();
      return;
    }
    if (!validateRefresh.verify) {
      request.body.refreshToken = await TOKEN.createRefreshToken(
        validateAccess,
      );
    }
    request.body.user = validateAccess.idx;
    next();
  }
}
