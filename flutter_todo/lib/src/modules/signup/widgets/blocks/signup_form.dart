import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/signup/widgets/atoms/id_input.dart';
import 'package:flutter_todo/src/modules/signup/widgets/atoms/password_input.dart';
import 'package:flutter_todo/src/modules/signup/widgets/atoms/password_valid_iput.dart';
import 'package:flutter_todo/src/modules/signup/widgets/atoms/signup_button.dart';

class SignupForm extends HookWidget {
  const SignupForm({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        const IdInput(),
        SizedBox(height: rem(2)),
        const PasswordInput(),
        SizedBox(height: rem(2)),
        const PasswordValidInput(),
        SizedBox(height: rem(2)),
        const SignupButton(),
      ],
    );
  }
}
