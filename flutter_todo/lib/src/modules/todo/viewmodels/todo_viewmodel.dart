import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:flutter_todo/src/modules/todo/services/create_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/delete_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todos_service.dart';
import 'package:flutter_todo/src/modules/todo/services/update_todo_service.dart';

class TodoViewmodel extends ChangeNotifier {
  String memo = '';

  set changeMemo(String value) => memo = value;

  Future<List<TodoModel>> getTodos() async {
    Response response = await requestGetTodos();
    return (response.data['todos'] as List<dynamic>)
        .map((json) => TodoModel.fromJson(json))
        .toList();
  }

  Future<TodoModel> getTodo(int idx) async {
    Response response = await requestGetTodo(idx);
    return TodoModel.fromJson(response.data['todo']);
  }

  Future<Response> createTodo() async {
    return await requestCreateTodo(memo);
  }

  Future<Response> updateTodo(int idx) async {
    return await requestUpdateTodo(idx, memo);
  }

  Future<Response> deleteTodo(int idx) async {
    return await requestDeleteTodo(idx);
  }
}
