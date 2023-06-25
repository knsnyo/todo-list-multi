import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestUpdateTodo(int idx, String memo) async {
  try {
    Dio DIO = await tokenDio();
    Response response = await DIO.put('$todoUrl/$idx', data: {
      "memo": memo,
    });
    return response;
  } catch (error) {
    rethrow;
  }
}
