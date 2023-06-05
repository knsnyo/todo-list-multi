import { Todo } from '@prisma/client';

export interface ITodoResponse {
  todos?: Todo[];
  todo?: Todo;
  accessToken?: string;
  refreshToken?: string;
}
