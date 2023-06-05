import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { ITokens } from 'src/@types/tokens.interface';
import { Header } from 'src/common/utils/header';
import { Token } from 'src/common/utils/token';
import { AuthService } from 'src/modules/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject(ConfigService) private readonly configService: ConfigService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  public async signin(
    @Body('id') id: string,
    @Body() user: User,
  ): Promise<ITokens> {
    const db: User = await this.authService.findUserById(id);
    await this.authService.validate(user, db);
    const TOKEN: Token = new Token(this.configService, this.jwtService);
    const [ACCESS_TOKEN, REFRESH_TOKEN]: string[] = await Promise.all([
      TOKEN.createAccessToken(db),
      TOKEN.createRefreshToken(db),
    ]);
    return {
      accessToken: ACCESS_TOKEN,
      refreshToken: REFRESH_TOKEN,
    };
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  public async signup(
    @Body() user: User,
    @Body('id') id: string,
  ): Promise<void> {
    await this.authService.isConflict(id);
    await this.authService.createUser(user);
  }

  @HttpCode(HttpStatus.OK)
  @Get('signin')
  public async auto(@Req() request: Request, @Res() response: Response) {
    const HEADER: Header = new Header(request, response);
    return await this.authService.auto(HEADER);
  }
}
