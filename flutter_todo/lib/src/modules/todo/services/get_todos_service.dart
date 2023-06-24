import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestGetTodos(Dio dio) async {
  try {
    Response response = await dio.get(todoUrl);
    return response;
  } catch (error) {
    rethrow;
  }
}
