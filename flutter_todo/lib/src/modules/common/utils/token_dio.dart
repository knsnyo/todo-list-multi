import 'package:dio/dio.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';

Future<Dio> tokenDio() async {
  final Dio dio = Dio();

  dio.interceptors.add(InterceptorsWrapper(
    onRequest: (options, handler) async {
      Map<String, String> tokens = await getAllTokens();
      options.headers['Authorization'] = 'Bearer ${tokens['accessToken']}';
      options.headers['Set-Cookie'] =
          'refresh_token=${tokens['refreshToken']};';

      return handler.next(options);
    },
    onResponse: (response, handler) async {
      String accessToken = response.data?['accessToken'] ?? '';
      String refreshToken = response.data?['refreshToken'] ?? '';

      if ('' != accessToken) {
        await setAccessToken(accessToken);
      }
      if ('' != refreshToken) {
        await setRefreshToken(refreshToken);
      }

      return handler.next(response);
    },
  ));

  return dio;
}
