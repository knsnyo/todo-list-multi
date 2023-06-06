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
  UseInterceptors,
} from '@nestjs/common';
import { ITodoResponse } from 'src/@types/todo-response.interface';
import { TodoGuard } from 'src/common/guards/todo.guard';
import { TokenInterceptor } from 'src/common/interceptors/token.interceptor';
import { TodoService } from 'src/modules/todo/todo.service';

@Controller('todo')
@UseGuards(TodoGuard)
@UseInterceptors(TokenInterceptor)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  public async getList(
    @Body('user', ParseIntPipe) userIdx: number,
  ): Promise<ITodoResponse> {
    return {
      todos: await this.todoService.getList(userIdx),
    };
  }

  @HttpCode(HttpStatus.OK)
  @Get(':idx')
  public async getOne(
    @Param('idx', ParseIntPipe) todoIdx: number,
  ): Promise<ITodoResponse> {
    return {
      todo: await this.todoService.getOne(todoIdx),
    };
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
