class Todo {
  final int idx;
  final int user;
  final String memo;

  Todo({
    required this.idx,
    required this.user,
    required this.memo,
  });

  factory Todo.fromJson(Map<String, dynamic> json) => Todo(
        idx: json['idx'] as int,
        user: json['user'] as int,
        memo: json['memo'].toString(),
      );
}

class TodoModel {
  final Todo todo;
  final List<Todo> todos;

  TodoModel(this.todo, this.todos);
}
