import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<void> requestUpdateTodo(int idx, String memo) async =>
    (await tokenDio()).put('$todoUrl/$idx', data: {
      "memo": memo,
    }).catchError((error) => throw error);
