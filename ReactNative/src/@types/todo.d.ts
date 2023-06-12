export interface Todo {
  idx: number;
  user: number;
  memo: string;
}

export interface ITodo {
  todo: Todo;
}

export interface ITodos {
  todos: Todo[];
}
