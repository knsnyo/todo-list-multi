import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class SigninButton extends HookConsumerWidget {
  const SigninButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signinViewmodel = ref.watch(signinViewmodelProvider);
    return Button(
      onPress: () async {
        bool isSuccess = await signinViewmodel.signin();
        if (!isSuccess) {
          ScaffoldMessenger.of(context)
              .showSnackBar(SnackBar(content: Text('로그인 실패')));
        } else {}
        Navigator.of(context)
            .pushNamedAndRemoveUntil('/todos', (route) => false);
      },
      text: '로그인',
    );
  }
}
