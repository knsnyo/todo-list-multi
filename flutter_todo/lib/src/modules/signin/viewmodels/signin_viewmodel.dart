import 'package:flutter_todo/src/modules/signin/models/signin_model.dart';
import 'package:flutter_todo/src/modules/signin/services/signin_service.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SigninViewModel extends StateNotifier<SigninModel> {
  SigninViewModel() : super(SigninModel(id: '', password: ''));

  void changeId(String id) =>
      state = SigninModel(id: id, password: state.password);

  void changePassword(String password) =>
      state = SigninModel(id: state.id, password: password);

  Future<void> signin() async =>
      await requestSignin(state).catchError((error) => throw error);
}
