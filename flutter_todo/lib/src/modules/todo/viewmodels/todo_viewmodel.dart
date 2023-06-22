import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todos_service.dart';

class TodoViewmodel extends ChangeNotifier {
  String memo = '';

  set changeMemo(String value) => memo = value;

  Future<List<TodoModel>> getTodos() async {
    try {
      Response response = await requestGetTodos();
      if (200 != response.statusCode) {
        throw Exception('Todo 목록 불러오기 실패');
      }
      List<TodoModel> todos =
          response.data.map((json) => TodoModel.fromJson(json));

      return todos;
    } catch (error) {
      rethrow;
    }
  }
}
