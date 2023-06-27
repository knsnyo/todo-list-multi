import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';
import 'package:flutter_todo/src/modules/common/utils/url.dart';
import 'package:flutter_todo/src/modules/signin/models/signin_model.dart';

Future<void> requestSignin(SigninModel formData) async => await Dio()
    .post(signinUrl, data: formData.toJson())
    .then((response) => setAllTokens(
        response.data['accessToken'], response.data['refreshToken']))
    .catchError((error) => throw error);
