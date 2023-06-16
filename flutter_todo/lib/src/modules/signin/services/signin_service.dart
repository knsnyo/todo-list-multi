import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/signin/models/signin_model.dart';

Future<Response> requestSignin(SigninModel formData) async {
  return await Dio().post(signinUrl, data: formData.toJson());
}
