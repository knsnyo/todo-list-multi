import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare, genSalt, hash } from 'bcrypt';
import { PrismaService } from 'src/common/prisma.service';
import { Header } from 'src/common/utils/header';
import { Token } from 'src/common/utils/token';
import { TokenResultDTO } from 'src/modules/auth/dtos/token-result.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  public async findUserById(id: string): Promise<User> {
    const find: User = await this.prismaService.user.findUnique({
      where: { id: id },
    });
    if (!find) {
      throw new NotFoundException();
    }
    return find;
  }

  public async validate(
    { password: input }: User,
    { password: db }: User,
  ): Promise<void> {
    const validation: boolean = await compare(input, db);
    if (!validation) {
      throw new UnauthorizedException();
    }
  }

  public async isConflict(id: string): Promise<void> {
    const find: User = await this.prismaService.user.findFirst({
      where: { id: id },
    });
    if (find) {
      throw new ConflictException();
    }
  }

  public async createUser({ id, password }: User): Promise<void> {
    const salt: string = await genSalt(10);
    const hashed: string = await hash(password, salt);
    await this.prismaService.user.create({
      data: {
        id: id,
        password: hashed,
      },
    });
  }

  public async auto(HEADER: Header) {
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
    if (!RESULT_ACCESS.verify && !RESULT_REFRESH.verify) {
      throw new UnauthorizedException();
    }
    if (!RESULT_ACCESS.verify) {
      return await TOKEN.createAccessToken(RESULT_REFRESH);
    }
    if (!RESULT_REFRESH.verify) {
      return await TOKEN.createRefreshToken(RESULT_ACCESS);
    }
  }
}
