import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthMiddleware } from 'src/common/middlewares/auth.middleware';
import { PrismaService } from 'src/common/prisma.service';
import { TodoController } from 'src/modules/todo/todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [JwtService, PrismaService, TodoService],
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('todo');
  }
}
