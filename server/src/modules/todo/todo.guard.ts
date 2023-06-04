import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class TodoGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const user: User = await this.prismaService.user.findUnique({
      where: { idx: request.body.user },
    });
    if (!user) {
      return false;
    }
    return true;
  }
}
