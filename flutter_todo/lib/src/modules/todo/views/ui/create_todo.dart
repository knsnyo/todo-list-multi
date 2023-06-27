import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class CreateTodo extends HookConsumerWidget {
  const CreateTodo({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoNotifier = ref.watch(todoViewModelProvider.notifier);
    final memo = useState<String>('');
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    final navigator = Navigator.of(context);
    return Scaffold(
      appBar: Header(context: context),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('할일 입력'),
            SizedBox(height: rem(2)),
            Input(
              init: '',
              hint: '할일 입력',
              obscureText: false,
              onChangeText: (value) => memo.value = value,
            ),
            SizedBox(height: rem(2)),
            Button(
              onPress: () async {
                await todoNotifier
                    .createTodo(memo.value)
                    .then((_) => navigator.pop())
                    .catchError((_) => scaffoldMessenger.showSnackBar(
                        const SnackBar(content: Text('할일 등록 실패'))));
              },
              text: '등록',
            ),
          ],
        ),
      ),
    );
  }
}
