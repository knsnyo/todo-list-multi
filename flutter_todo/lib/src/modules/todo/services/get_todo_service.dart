import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';

Future<Todo> requestGetTodo(int idx) async => (await tokenDio())
    .get('$todoUrl/$idx')
    .then((response) => Todo.fromJson(response.data['todo']))
    .catchError((error) => throw error);
