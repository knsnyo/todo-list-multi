import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';

Future<List<Todo>> requestGetTodos() async => (await tokenDio())
    .get(todoUrl)
    .then((response) => (response.data['todos'] as List<dynamic>)
        .map((json) => Todo.fromJson(json))
        .toList())
    .catchError((error) => throw error);
