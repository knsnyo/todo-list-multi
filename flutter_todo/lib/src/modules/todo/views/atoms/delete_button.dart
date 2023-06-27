import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class DeleteButton extends HookConsumerWidget {
  final int idx;
  const DeleteButton({super.key, required this.idx});
  Widget build(BuildContext context, WidgetRef ref) {
    final todoViewModel = ref.watch(todoViewModelProvider);
    return GestureDetector(
      onTap: () async {
        Navigator.of(context).pop();
        Response response = await todoViewModel.deleteTodo(idx);
        if (204 != response.statusCode) {
          ScaffoldMessenger.of(context)
              .showSnackBar(SnackBar(content: Text('할일 삭제 실패')));
        }
      },
      child: const Text(
        '삭제',
        style: TextStyle(color: Colors.red),
      ),
    );
  }
}
