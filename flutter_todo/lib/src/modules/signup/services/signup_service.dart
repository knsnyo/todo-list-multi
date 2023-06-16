import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/signup/models/signup_model.dart';

Future<Response> requestSignup(SignupModel formData) async {
  return await Dio().post(signupUrl, data: formData.toJson());
}
