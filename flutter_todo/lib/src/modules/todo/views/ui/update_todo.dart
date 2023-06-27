import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/common/widgets/error_body.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';
import 'package:flutter_todo/src/modules/common/widgets/load_body.dart';
import 'package:flutter_todo/src/modules/todo/views/atoms/update_button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class UpdateTodo extends HookConsumerWidget {
  final int idx;
  const UpdateTodo({super.key, required this.idx});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoModel = ref.watch(todoViewModelProvider);
    final memo = useState<String>('');
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
                UpdateButton(idx: idx, memo: memo.value),
              ],
            ),
          ),
          error: (error, stackTrace) => const ErrorBody(),
          loading: () => const LoadBody(),
        ));
  }
}
