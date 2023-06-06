import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/common/services/prisma.service';
import { AuthModule } from 'src/modules/auth/auth.module';
import { TodoModule } from 'src/modules/todo/todo.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot({ isGlobal: true }), TodoModule],
  providers: [JwtService, PrismaService],
  exports: [JwtService, PrismaService],
})
export class MainModule {}
