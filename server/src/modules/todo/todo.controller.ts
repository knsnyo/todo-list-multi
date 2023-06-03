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
import { TodoResponseDTO } from 'src/@types/todo-response.interface';
import { TodoService } from 'src/modules/todo/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  public async getList(
    @Body('user', ParseIntPipe) userIdx: number,
    @Body('accessToken') accessToken?: string,
    @Body('refreshToken') refreshToken?: string,
  ): Promise<TodoResponseDTO> {
    return {
      todos: await this.todoService.getList(userIdx),
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  @Get(':idx')
  public async getOne(
    @Param('idx', ParseIntPipe) todoIdx: number,
    @Body('accessToken') accessToken?: string,
    @Body('refreshToken') refreshToken?: string,
  ): Promise<TodoResponseDTO> {
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
  ): Promise<TodoResponseDTO> {
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
  ): Promise<TodoResponseDTO> {
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
  ): Promise<TodoResponseDTO> {
    await this.todoService.isOwner(userIdx, todoIdx);
    await this.todoService.deleteTodo(todoIdx);
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }
}
