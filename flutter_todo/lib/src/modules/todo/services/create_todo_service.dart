import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestCreateTodo(Dio dio, String memo) async {
  try {
    Response response = await dio.post(todoUrl, data: {
      "memo": memo,
    });
    return response;
  } catch (error) {
    rethrow;
  }
}
