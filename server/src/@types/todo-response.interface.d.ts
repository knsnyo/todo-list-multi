import { Todo } from '@prisma/client';

export class TodoResponseDTO {
  todos?: Todo[];
  todo?: Todo;
  accessToken?: string;
  refreshToken?: string;
}
