import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/signin/models/signin_model.dart';
import 'package:flutter_todo/src/modules/signin/services/signin_service.dart';

class SigninViewmodel extends ChangeNotifier {
  String id = '';
  String password = '';

  set changeId(String value) => id = value;
  set changePassword(String value) => password = value;

  Future<bool> signin() async {
    try {
      Response res =
          await requestSignin(SigninModel(id: id, password: password));
      if (200 != res.statusCode) {
        throw Exception('로그인 실패');
      }
      return true;
    } catch (error) {
      // error handling
      debugPrint(error.toString());
      return false;
    }
  }
}
