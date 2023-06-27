import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SigninButton extends HookConsumerWidget {
  const SigninButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signinNotifier = ref.watch(signinViewModelProvider.notifier);
    final todoNotifier = ref.watch(todoViewModelProvider.notifier);
    return Button(
      onPress: () async {
        await signinNotifier.signin().then((_) {
          todoNotifier.refresh();
          return Navigator.of(context).pop();
        }).catchError((error) => ScaffoldMessenger.of(context)
            .showSnackBar(const SnackBar(content: Text('로그인 실패'))));
      },
      text: '로그인',
    );
  }
}
