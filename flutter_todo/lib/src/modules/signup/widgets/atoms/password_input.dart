import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';

class PasswordInput extends HookWidget {
  const PasswordInput({super.key});

  @override
  Widget build(BuildContext context) {
    return Input(hint: '비밀번호', obscureText: true);
  }
}
