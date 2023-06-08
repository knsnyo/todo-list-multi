export interface ITodo {
  idx: number;
  user: number;
  memo: string;
}

export interface ITodos {
  todos: ITodo[];
}
