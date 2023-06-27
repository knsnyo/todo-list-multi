import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class DeleteButton extends HookConsumerWidget {
  final int idx;
  const DeleteButton({super.key, required this.idx});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoNotifier = ref.watch(todoViewModelProvider.notifier);
    return GestureDetector(
      onTap: () async {
        await todoNotifier
            .deleteTodo(idx)
            .then((value) => Navigator.of(context).pop())
            .catchError((_) => ScaffoldMessenger.of(context)
                .showSnackBar(const SnackBar(content: Text('할일 삭제 실패'))));
      },
      child: const Text(
        '삭제',
        style: TextStyle(color: Colors.red),
      ),
    );
  }
}
