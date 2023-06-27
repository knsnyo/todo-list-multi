import 'package:flutter_todo/src/modules/signup/models/signup_model.dart';
import 'package:flutter_todo/src/modules/signup/services/signup_service.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SignupViewModel extends StateNotifier<SignupModel> {
  SignupViewModel() : super(SignupModel(id: '', password: ''));

  void changeId(String id) =>
      state = SignupModel(id: id, password: state.password);

  void changePassword(String password) =>
      state = SignupModel(id: state.id, password: password);

  Future<void> signup() async =>
      await requestSignup(state).catchError((error) => throw error);
}
