import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestGetTodo(Dio dio, int idx) async {
  try {
    Response response = await dio.get('$todoUrl/$idx');
    return response;
  } catch (error) {
    rethrow;
  }
}
