import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/signin/models/signin_model.dart';

Future<Response> requestSignin(SigninModel formData) async {
  Response response = await Dio().post(signinUrl, data: formData.toJson());
  if (200 == response.statusCode) {
    await setAllTokens(
        response.data['accessToken'], response.data['refreshToken']);
  }

  return response;
}
