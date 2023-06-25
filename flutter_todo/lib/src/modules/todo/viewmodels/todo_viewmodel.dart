import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:flutter_todo/src/modules/todo/services/create_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/delete_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todo_service.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todos_service.dart';

class TodoViewmodel extends ChangeNotifier {
  String memo = '';

  set changeMemo(String value) => memo = value;

  Future<List<TodoModel>> getTodos() async {
    Dio dio = Dio(BaseOptions(baseUrl: todoUrl));
    Map<String, String> tokens = await getAllTokens();
    dio.options.headers['Authorization'] = 'Bearer ${tokens['accessToken']}';
    dio.options.headers['Set-Cookie'] =
        'refresh_token=${tokens['refreshToken']};';

    Response response = await requestGetTodos(dio);
    List<TodoModel> todos = (response.data['todos'] as List<dynamic>)
        .map((json) => TodoModel.fromJson(json))
        .toList();

    return todos;
  }

  Future<TodoModel> getTodo(int idx) async {
    Dio dio = Dio(BaseOptions(baseUrl: todoUrl));
    Map<String, String> tokens = await getAllTokens();
    dio.options.headers['Authorization'] = 'Bearer ${tokens['accessToken']}';
    dio.options.headers['Set-Cookie'] =
        'refresh_token=${tokens['refreshToken']};';

    Response response = await requestGetTodo(dio, idx);
    TodoModel todo = TodoModel.fromJson(response.data['todo']);

    return todo;
  }

  Future<Response> createTodo() async {
    Dio dio = Dio(BaseOptions(baseUrl: todoUrl));
    Map<String, String> tokens = await getAllTokens();
    dio.options.headers['Authorization'] = 'Bearer ${tokens['accessToken']}';
    dio.options.headers['Set-Cookie'] =
        'refresh_token=${tokens['refreshToken']};';

    return await requestCreateTodo(dio, memo);
  }

  Future<Response> deleteTodo(int idx) async {
    Dio dio = Dio(BaseOptions(baseUrl: todoUrl));
    Map<String, String> tokens = await getAllTokens();
    dio.options.headers['Authorization'] = 'Bearer ${tokens['accessToken']}';
    dio.options.headers['Set-Cookie'] =
        'refresh_token=${tokens['refreshToken']};';

    return await requestDeleteTodo(dio, idx);
  }
}
