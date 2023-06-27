import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<void> requestCreateTodo(String memo) async => (await tokenDio())
    .post(todoUrl, data: {"memo": memo}).catchError((error) => throw error);
