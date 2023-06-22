import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/token_dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';

Future<Response> requestGetTodos() async {
  Dio DIO = tokenDio();
  return await DIO.get(todoUrl);
}
