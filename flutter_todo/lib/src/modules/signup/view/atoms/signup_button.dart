import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SignupButton extends HookConsumerWidget {
  const SignupButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signupNotifier = ref.watch(signupViewModelProvider.notifier);
    return Button(
      onPress: () async {
        await signupNotifier
            .signup()
            .then((_) => Navigator.of(context).pop())
            .catchError((error) => ScaffoldMessenger.of(context)
                .showSnackBar(const SnackBar(content: Text('회원가입 실패'))));
      },
      text: '회원가입',
    );
  }
}
