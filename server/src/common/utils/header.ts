import { UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

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

  public async getAccessToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      const AUTHORIZATION: string = this.request.headers.authorization;
      if (!AUTHORIZATION) {
        reject(new UnauthorizedException());
      }
      const tokenParts: string[] = AUTHORIZATION.split(' ');
      if (tokenParts.length !== 2 || tokenParts[0].toLowerCase() !== 'bearer') {
        reject(new UnauthorizedException());
      }
      const ACCESS_TOKEN: string = tokenParts[1];
      if (!ACCESS_TOKEN) {
        reject(new UnauthorizedException());
      }
      resolve(ACCESS_TOKEN);
    });
  }

  public async getRefreshToken(): Promise<string> {
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
      const REFRESH_TOKEN: string = refreshTokenCookie
        .split('=')[1]
        .split(';')[0];
      if (!REFRESH_TOKEN) {
        reject(new UnauthorizedException());
      }
      resolve(REFRESH_TOKEN);
    });
  }
}
