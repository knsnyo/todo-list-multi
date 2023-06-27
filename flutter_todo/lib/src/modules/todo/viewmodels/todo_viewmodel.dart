import 'dart:async';

import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:flutter_todo/src/modules/todo/services/create_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/delete_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todos_service.dart';
import 'package:flutter_todo/src/modules/todo/services/update_todo_service.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class TodoViewModel extends AsyncNotifier<TodoModel> {
  @override
  Future<TodoModel> build() async {
    List<Todo> todos =
        await requestGetTodos().catchError((error) => throw error);
    return TodoModel(Todo(idx: 0, user: 0, memo: ''), todos);
  }

  Future<TodoModel> getTodos() async {
    state = const AsyncValue.loading();
    List<Todo> todos =
        await requestGetTodos().catchError((error) => throw error);
    return TodoModel(Todo(idx: 0, user: 0, memo: ''), todos);
  }

  Future<void> getTodo(int idx) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      Todo todo = await requestGetTodo(idx).catchError((error) => throw error);
      return TodoModel(todo, state.value!.todos);
    });
  }

  Future<void> createTodo(String memo) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      await requestCreateTodo(memo).catchError((error) => throw error);
      TodoModel todoModel = await getTodos();
      return TodoModel(state.value!.todo, todoModel.todos);
    });
  }

  Future<void> updateTodo(int idx, String memo) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      await requestUpdateTodo(idx, memo).catchError((error) => throw error);
      List<dynamic> todo = await Future.wait([
        requestGetTodo(idx),
        requestGetTodos(),
      ]);
      return TodoModel(todo[0], todo[1]);
    });
  }

  Future<void> deleteTodo(int idx) async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      await requestDeleteTodo(idx).catchError((error) => throw error);
      List<Todo> todos =
          await requestGetTodos().catchError((error) => throw error);
      return TodoModel(Todo(idx: 0, user: 0, memo: ''), todos);
    });
  }

  Future<void> refresh() async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      return await getTodos();
    });
  }
}
