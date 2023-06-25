import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestGetTodos() async {
  try {
    Dio DIO = await tokenDio();
    Response response = await DIO.get(todoUrl);
    return response;
  } catch (error) {
    rethrow;
  }
}
