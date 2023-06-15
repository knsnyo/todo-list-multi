import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SigninNavButton extends HookConsumerWidget {
  const SigninNavButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Button(
      onPress: () => Navigator.of(context).pushNamed('/signin'),
      text: '로그인',
    );
  }
}
