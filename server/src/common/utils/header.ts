import { UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { ITokens } from 'src/@types/tokens.interface';

export class Header {
  constructor(
    private readonly request: Request,
    private readonly response: Response,
  ) {}

  public async setAccessToken(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.response.setHeader(`Authorization`, `Bearer ${token}`);
      resolve();
    });
  }

  public async setRefreshToken(token: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.response.setHeader('Set-Cookie', `refresh_token=${token}`);
      resolve();
    });
  }

  public async setAllTokens({
    accessToken,
    refreshToken,
  }: ITokens): Promise<void> {
    await Promise.all([
      this.setAccessToken(accessToken),
      this.setRefreshToken(refreshToken),
    ]);
  }

  private async getAccessToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      const authorization: string = this.request.headers.authorization;
      if (!authorization) {
        reject(new UnauthorizedException());
      }
      const tokenParts: string[] = authorization.split(' ');
      if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== 'bearer') {
        reject(new UnauthorizedException());
      }
      const accessToken: string = tokenParts[1];
      if (!accessToken) {
        reject(new UnauthorizedException());
      }
      resolve(accessToken);
    });
  }

  private async getRefreshToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      const setCookieHeader: string[] = this.request.headers['set-cookie'];
      if (!setCookieHeader || setCookieHeader.length === 0) {
        reject(new UnauthorizedException());
      }
      const refreshTokenCookie: string = setCookieHeader.find((cookie) =>
        cookie.includes('refresh_token='),
      );
      if (!refreshTokenCookie) {
        reject(new UnauthorizedException());
      }
      const refreshToken: string = refreshTokenCookie
        .split('=')[1]
        .split(';')[0];
      if (!refreshToken) {
        reject(new UnauthorizedException());
      }
      resolve(refreshToken);
    });
  }

  public async getAllTokens(): Promise<ITokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.getAccessToken(),
      this.getRefreshToken(),
    ]);

    return { accessToken, refreshToken };
  }
}
