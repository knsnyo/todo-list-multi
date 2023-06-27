import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
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
    final todoViewmodel = ref.watch(todoViewmodelProvider);

    return Scaffold(
      appBar: Header(context: context),
      body: FutureBuilder(
        future: todoViewmodel.getTodo(idx),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            Navigator.of(context).pop();
          }
          if (!snapshot.hasData) {
            return const CircularProgressIndicator();
          }
          TodoModel todo = snapshot.data!;
          return Center(
            child: Column(
              children: [
                Expanded(child: Center(child: Text(todo.memo))),
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
          );
        },
      ),
    );
  }
}
