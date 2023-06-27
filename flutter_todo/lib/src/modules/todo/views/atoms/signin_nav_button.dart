import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SigninNavButton extends HookConsumerWidget {
  const SigninNavButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final navigator = Navigator.of(context);
    return Button(
      onPress: () => navigator.pushNamed('/signin'),
      text: '로그인',
    );
  }
}
