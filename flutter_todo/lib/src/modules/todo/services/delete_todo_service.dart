import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestDeleteTodo(Dio dio, int idx) async {
  try {
    Response response = await dio.delete('$todoUrl/$idx');
    return response;
  } catch (error) {
    rethrow;
  }
}
