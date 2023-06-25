import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestGetTodo(int idx) async {
  try {
    Dio DIO = await tokenDio();
    Response response = await DIO.get('$todoUrl/$idx');
    return response;
  } catch (error) {
    rethrow;
  }
}
