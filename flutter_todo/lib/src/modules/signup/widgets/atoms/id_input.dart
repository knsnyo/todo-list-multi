import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';

class IdInput extends HookWidget {
  const IdInput({super.key});

  @override
  Widget build(BuildContext context) {
    return Input(hint: '아이디', obscureText: false);
  }
}
