import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class UpdateButton extends HookConsumerWidget {
  const UpdateButton({
    super.key,
    required this.idx,
    required this.memo,
  });

  final int idx;
  final String memo;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoNotifier = ref.watch(todoViewModelProvider.notifier);
    final scaffoldMessenger = ScaffoldMessenger.of(context);
    final navigator = Navigator.of(context);
    return Button(
      onPress: () async {
        await todoNotifier
            .updateTodo(idx, memo)
            .then((_) => navigator.pop())
            .catchError((_) => scaffoldMessenger
                .showSnackBar(const SnackBar(content: Text('할일 수정 실패'))));
      },
      text: '수정',
    );
  }
}
