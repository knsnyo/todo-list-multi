import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class IdInput extends HookConsumerWidget {
  const IdInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signinNotifier = ref.watch(signinViewModelProvider.notifier);

    return Input(
      init: '',
      hint: '아이디',
      obscureText: false,
      onChangeText: (text) => signinNotifier.changeId(text),
    );
  }
}
