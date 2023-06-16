import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/signin/views/atoms/id_input.dart';
import 'package:flutter_todo/src/modules/signin/views/atoms/password_input.dart';
import 'package:flutter_todo/src/modules/signin/views/atoms/signin_button.dart';

class SigninForm extends HookWidget {
  const SigninForm({super.key});

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
        const SigninButton(),
      ],
    );
  }
}
