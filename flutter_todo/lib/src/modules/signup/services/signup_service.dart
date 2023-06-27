import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/signup/models/signup_model.dart';

Future<void> requestSignup(SignupModel formData) async => await Dio()
    .post(signupUrl, data: formData.toJson())
    .catchError((error) => throw error);
