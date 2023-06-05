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
  UseGuards,
} from '@nestjs/common';
import { ITodoResponse } from 'src/@types/todo-response.interface';
import { TodoGuard } from 'src/modules/todo/todo.guard';
import { TodoService } from 'src/modules/todo/todo.service';

@Controller('todo')
@UseGuards(TodoGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  public async getList(
    @Body('user', ParseIntPipe) userIdx: number,
    @Body('accessToken') accessToken?: string,
    @Body('refreshToken') refreshToken?: string,
  ): Promise<ITodoResponse> {
    return {
      todos: await this.todoService.getList(userIdx),
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Get(':idx')
  public async getOne(
    @Param('idx', ParseIntPipe) todoIdx: number,
    @Body('accessToken') accessToken?: string,
    @Body('refreshToken') refreshToken?: string,
  ): Promise<ITodoResponse> {
    return {
      todo: await this.todoService.getOne(todoIdx),
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async createTodo(
    @Body('user', ParseIntPipe) userIdx: number,
    @Body('memo') memo: string,
    @Body('accessToken') accessToken?: string,
    @Body('refreshToken') refreshToken?: string,
  ): Promise<ITodoResponse> {
    await this.todoService.createTodo({ user: userIdx, memo: memo });
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  @HttpCode(HttpStatus.CREATED)
  @Put(':idx')
  public async updateTodo(
    @Body('user', ParseIntPipe) userIdx: number,
    @Body('memo') memo: string,
    @Param('idx', ParseIntPipe) todoIdx: number,
    @Body('accessToken') accessToken?: string,
    @Body('refreshToken') refreshToken?: string,
  ): Promise<ITodoResponse> {
    await this.todoService.isOwner(userIdx, todoIdx);
    await this.todoService.updateTodo(todoIdx, { user: userIdx, memo: memo });
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':idx')
  public async deleteTodo(
    @Body('user', ParseIntPipe) userIdx: number,
    @Param('idx', ParseIntPipe) todoIdx: number,
    @Body('accessToken') accessToken?: string,
    @Body('refreshToken') refreshToken?: string,
  ): Promise<ITodoResponse> {
    await this.todoService.isOwner(userIdx, todoIdx);
    await this.todoService.deleteTodo(todoIdx);
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
