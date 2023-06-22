import 'package:flutter_secure_storage/flutter_secure_storage.dart';

const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

// Create storage
const storage = FlutterSecureStorage();

// Read
Future<String> getAccessToken() async =>
    await storage.read(key: ACCESS_TOKEN) ?? '';
Future<String> getRefreshToken() async =>
    await storage.read(key: REFRESH_TOKEN) ?? '';

Future<Map<String, String>> getAllTokens() async {
  List<String> tokens =
      await Future.wait([getAccessToken(), getRefreshToken()]);
  return {'accessToken': tokens[0], 'refreshToken': tokens[1]};
}

// Delete all
Future<void> deleteAllToken() async => await storage.deleteAll();

// Write value
Future<void> setAccessToken(String token) async =>
    await storage.write(key: ACCESS_TOKEN, value: token);

Future<void> setRefreshToken(String token) async =>
    await storage.write(key: REFRESH_TOKEN, value: token);

Future<void> setAllTokens(String accessToken, String refreshToken) async =>
    await Future.wait([
      setAccessToken(accessToken),
      setRefreshToken(refreshToken),
    ]);
