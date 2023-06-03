import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodoService } from 'src/modules/todo/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  public async getList(
    @Body('user', ParseIntPipe) userIdx: number,
  ): Promise<Todo[]> {
    return this.todoService.getList(userIdx);
  }

  @Get(':idx')
  public async getOne(
    @Param('idx', ParseIntPipe) todoIdx: number,
  ): Promise<Todo> {
    return this.todoService.getOne(todoIdx);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async createTodo(
    @Body('user', ParseIntPipe) userIdx: number,
    @Body('memo') memo: string,
  ): Promise<void> {
    await this.todoService.createTodo({ user: userIdx, memo: memo });
  }

  @HttpCode(HttpStatus.CREATED)
  @Put(':idx')
  public async updateTodo(
    @Body('user', ParseIntPipe) userIdx: number,
    @Body('memo') memo: string,
    @Param('idx', ParseIntPipe) todoIdx: number,
  ): Promise<void> {
    await this.todoService.isOwner(userIdx, todoIdx);
    await this.todoService.updateTodo(todoIdx, { user: userIdx, memo: memo });
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':idx')
  public async deleteTodo(
    @Body('user', ParseIntPipe) userIdx: number,
    @Param('idx', ParseIntPipe) todoIdx: number,
  ): Promise<void> {
    await this.todoService.isOwner(userIdx, todoIdx);
    await this.todoService.deleteTodo(todoIdx);
  }
}
