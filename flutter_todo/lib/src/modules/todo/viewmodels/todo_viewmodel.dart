import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:flutter_todo/src/modules/todo/services/create_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/delete_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todos_service.dart';
import 'package:flutter_todo/src/modules/todo/services/update_todo_service.dart';

class TodoViewModel extends ChangeNotifier {
  List<TodoModel> todos = [];
  TodoModel todo = TodoModel(idx: 0, user: 0, memo: '');

  String memo = '';

  set changeMemo(String value) => memo = value;

  Future<List<TodoModel>> getTodos() async {
    try {
      Response response = await requestGetTodos();
      return (response.data['todos'] as List<dynamic>)
          .map((json) => TodoModel.fromJson(json))
          .toList();
    } catch (error) {
      rethrow;
    }
  }

  Future<TodoModel> getTodo(int idx) async {
    try {
      Response response = await requestGetTodo(idx);
      return TodoModel.fromJson(response.data['todo']);
    } catch (error) {
      rethrow;
    }
  }

  Future<Response> createTodo() async {
    Response response = await requestCreateTodo(memo);
    notifyListeners();
    return response;
  }

  Future<Response> updateTodo(int idx) async {
    Response response = await requestUpdateTodo(idx, memo);
    notifyListeners();
    return response;
  }

  Future<Response> deleteTodo(int idx) async {
    Response response = await requestDeleteTodo(idx);
    notifyListeners();
    return response;
  }
}
