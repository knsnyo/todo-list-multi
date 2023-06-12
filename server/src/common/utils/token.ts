import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ITokens } from 'src/@types/tokens.interface';
import { TokenPayloadDTO } from 'src/modules/auth/dtos/token-payload.dto';
import { TokenResultDTO } from 'src/modules/auth/dtos/token-result.dto';

export class Token {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  private async create(
    { idx }: TokenPayloadDTO,
    info: JwtSignOptions,
  ): Promise<string> {
    return await this.jwtService.signAsync({ idx }, info);
  }

  private async validate(token: string, key: string): Promise<TokenResultDTO> {
    try {
      const { idx } = await this.jwtService.verifyAsync(token, { secret: key });
      return { verify: true, idx: idx };
    } catch (error: unknown) {
      return { verify: false, idx: -1 };
    }
  }

  public async createAccessToken(payload: TokenPayloadDTO): Promise<string> {
    const key: string = this.configService.get('JWT_ACCESS_KEY');
    const expiresIn: string = this.configService.get('JWT_ACCESS_EXPIRES');
    return this.create(payload, { secret: key, expiresIn: expiresIn });
  }

  public async createRefreshToken(payload: TokenPayloadDTO): Promise<string> {
    const key: string = this.configService.get('JWT_REFRESH_KEY');
    const expiresIn: string = this.configService.get('JWT_REFRESH_EXPIRES');
    return this.create(payload, { secret: key, expiresIn: expiresIn });
  }

  public async createAllTokens(payload: TokenPayloadDTO): Promise<ITokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.createAccessToken(payload),
      this.createRefreshToken(payload),
    ]);

    return { accessToken, refreshToken };
  }

  public async validateAccessToken(token: string): Promise<TokenResultDTO> {
    const key: string = this.configService.get('JWT_ACCESS_KEY');
    return new Promise((resolve, reject) => {
      resolve(this.validate(token, key));
    });
  }

  public async validateRefreshToken(token: string): Promise<TokenResultDTO> {
    const key: string = this.configService.get('JWT_REFRESH_KEY');
    return new Promise((resolve, reject) => {
      resolve(this.validate(token, key));
    });
  }

  public async validateAllTokens(tokens: ITokens): Promise<TokenResultDTO[]> {
    return await Promise.all([
      this.validateAccessToken(tokens.accessToken),
      this.validateRefreshToken(tokens.refreshToken),
    ]);
  }
}
