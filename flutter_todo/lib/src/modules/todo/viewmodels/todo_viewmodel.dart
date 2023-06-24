import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:flutter_todo/src/modules/todo/services/get_todos_service.dart';

class TodoViewmodel extends ChangeNotifier {
  String memo = '';

  set changeMemo(String value) => memo = value;

  Future<List<TodoModel>> getTodos() async {
    Dio dio = Dio(BaseOptions(baseUrl: todoUrl));
    try {
      Map<String, String> tokens = await getAllTokens();
      dio.options.headers['Authorization'] = 'Bearer ${tokens['accessToken']}';
      dio.options.headers['Set-Cookie'] =
          'refresh_token=${tokens['refreshToken']};';

      Response response = await requestGetTodos(dio);
      if (200 != response.statusCode) {
        throw Exception('Todo 목록 불러오기 실패');
      }
      List<TodoModel> todos = (response.data['todos'] as List<dynamic>)
          .map((json) => TodoModel.fromJson(json))
          .toList();

      return todos;
    } catch (error) {
      rethrow;
    }
  }
}
