import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestUpdateTodo(Dio dio, int idx, String memo) async {
  try {
    Response response = await dio.put('$todoUrl/$idx', data: {
      "memo": memo,
    });
    return response;
  } catch (error) {
    rethrow;
  }
}
