import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SignupButton extends HookConsumerWidget {
  const SignupButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signupViewModel = ref.watch(signupViewModelProvider.notifier);
    return Button(
      onPress: () async {
        Response response = await signupViewModel.signup();
        if (201 != response.statusCode) {
          ScaffoldMessenger.of(context)
              .showSnackBar(SnackBar(content: Text('회원가입 실패')));
          return;
        }
        return Navigator.of(context).pop();
      },
      text: '회원가입',
    );
  }
}
