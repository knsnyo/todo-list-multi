import { ForbiddenException, Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from 'src/common/services/prisma.service';
import { TodoFormDTO } from 'src/modules/todo/dto/todo-form.dto';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  public async isOwner(userIdx: number, todoIdx: number) {
    const { user }: Todo = await this.prismaService.todo.findUnique({
      where: { idx: todoIdx },
    });
    if (userIdx !== user) {
      throw new ForbiddenException();
    }
  }

  public async getList(userIdx: number): Promise<Todo[]> {
    return await this.prismaService.todo.findMany({
      where: { user: userIdx },
    });
  }

  public async getOne(todoIdx: number): Promise<Todo> {
    return await this.prismaService.todo.findUnique({
      where: { idx: todoIdx },
    });
  }

  public async createTodo(todo: TodoFormDTO): Promise<void> {
    await this.prismaService.todo.create({
      data: todo,
    });
  }

  public async updateTodo(todoIdx: number, todo: TodoFormDTO): Promise<void> {
    await this.prismaService.todo.update({
      where: { idx: todoIdx },
      data: todo,
    });
  }

  public async deleteTodo(todoIdx: number): Promise<void> {
    await this.prismaService.todo.delete({
      where: { idx: todoIdx },
    });
  }
}
