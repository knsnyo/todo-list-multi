import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';

Dio tokenDio() {
  final dio = Dio();

  dio.interceptors.add(InterceptorsWrapper(
    onRequest: (options, handler) async {
      Map<String, String> tokens = await getAllTokens();
      options.headers['Authorization'] = 'Bearer ${tokens['accessToken']}';
      options.headers['Set-Cookie'] =
          'refresh_token=${tokens['refreshToken']};';
    },
    onResponse: (response, handler) async {
      final accessToken = response.data['accessToken'];
      final refreshToken = response.data['refreshToken'];

      if (null != accessToken) {
        await setAccessToken(accessToken);
      }
      if (null != refreshToken) {
        await setRefreshToken(refreshToken);
      }

      return handler.next(response.data);
    },
  ));

  return dio;
}
