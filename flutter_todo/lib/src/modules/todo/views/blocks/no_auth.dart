import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

import '../atoms/signin_nav_button.dart';
import '../atoms/signup_nav_button.dart';

class NoAuth extends HookConsumerWidget {
  const NoAuth({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const SigninNavButton(),
        SizedBox(height: rem(2)),
        const SignupNavButton(),
      ],
    );
  }
}
