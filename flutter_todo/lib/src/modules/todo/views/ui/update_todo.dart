import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class UpdateTodo extends HookConsumerWidget {
  final int idx;
  const UpdateTodo({super.key, required this.idx});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoModel = ref.watch(todoViewModelProvider);
    final todoNotifier = ref.watch(todoViewModelProvider.notifier);
    final memo = useState<String>('');
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    final navigator = Navigator.of(context);
    return Scaffold(
        appBar: Header(context: context),
        body: todoModel.when(
          data: (todoModel) => Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text('할일 수정'),
                SizedBox(height: rem(2)),
                Input(
                  init: todoModel.todo.memo,
                  hint: '할일 입력',
                  obscureText: false,
                  onChangeText: (value) => memo.value = value,
                ),
                SizedBox(height: rem(2)),
                Button(
                  onPress: () async {
                    await todoNotifier
                        .updateTodo(idx, memo.value)
                        .then((_) => navigator.pop())
                        .catchError((_) => scaffoldMessenger.showSnackBar(
                            const SnackBar(content: Text('할일 수정 실패'))));
                  },
                  text: '수정',
                ),
              ],
            ),
          ),
          error: (error, stackTrace) => const Text('통신 에러'),
          loading: () => const Center(child: CircularProgressIndicator()),
        ));
  }
}
