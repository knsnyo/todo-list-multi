import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/todo/views/atoms/delete_button.dart';
import 'package:flutter_todo/src/modules/todo/views/atoms/update_nav_button.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class Todo extends HookConsumerWidget {
  final int idx;
  const Todo({
    super.key,
    required this.idx,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoModel = ref.watch(todoViewModelProvider);
    return Scaffold(
      appBar: Header(context: context),
      body: todoModel.when(
        data: (todoModel) => Center(
          child: Column(
            children: [
              Expanded(child: Center(child: Text(todoModel.todo.memo))),
              SizedBox(
                height: rem(8),
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    UpdateNavButton(idx: idx),
                    DeleteButton(idx: idx),
                  ],
                ),
              )
            ],
          ),
        ),
        error: (error, stackTrace) => const Center(),
        loading: () => const Center(
          child: CircularProgressIndicator(),
        ),
      ),
    );
  }
}
