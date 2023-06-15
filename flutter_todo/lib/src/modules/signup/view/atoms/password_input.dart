import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class PasswordInput extends HookConsumerWidget {
  const PasswordInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signupViewmodel = ref.watch(signupViewmodelProvider);
    return Input(
      hint: '비밀번호',
      obscureText: true,
      onChangeText: (text) => signupViewmodel.changePassword = text,
    );
  }
}
