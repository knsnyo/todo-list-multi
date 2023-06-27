import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:flutter_todo/src/modules/todo/views/atoms/todo_item.dart';

class TodoList extends HookWidget {
  final List<Todo> todos;
  const TodoList({super.key, required this.todos});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: todos.length,
      itemBuilder: (context, index) => TodoItem(
        idx: todos[index].idx,
        text: todos[index].memo,
      ),
    );
  }
}
