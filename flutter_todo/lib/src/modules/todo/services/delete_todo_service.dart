import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<void> requestDeleteTodo(int idx) async => (await tokenDio())
    .delete('$todoUrl/$idx')
    .catchError((error) => throw error);
