import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/signup/models/signup_model.dart';
import 'package:flutter_todo/src/modules/signup/services/signup_service.dart';

class SignupViewmodel extends ChangeNotifier {
  String id = '';
  String password = '';

  set changeId(String value) => id = value;
  set changePassword(String value) => password = value;

  Future<bool> signUp() async {
    try {
      Response res =
          await requestSignup(SignupModel(id: id, password: password));
      if (201 != res.statusCode) {
        throw Exception('회원가입 실패');
      }
      return true;
    } catch (error) {
      // error handling
      return false;
    }
  }
}
