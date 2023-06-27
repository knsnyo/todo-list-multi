import 'package:flutter/material.dart';
import 'package:flutter_expandable_fab/flutter_expandable_fab.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/common/widgets/load_body.dart';
import 'package:flutter_todo/src/modules/todo/views/atoms/floating_button.dart';
import 'package:flutter_todo/src/modules/todo/views/blocks/no_auth.dart';
import 'package:flutter_todo/src/modules/todo/views/blocks/todo_list.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class Todos extends HookConsumerWidget {
  const Todos({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoModel = ref.watch(todoViewModelProvider);

    return todoModel.when(
      data: (todoModel) {
        if (todoModel.todos.isEmpty) {
          return Scaffold(
            appBar: Header(context: context),
            body: const Center(child: Text('할일을 입력하세요')),
            floatingActionButtonLocation: ExpandableFab.location,
            floatingActionButton: const FloatingButton(),
          );
        }
        return Scaffold(
          appBar: Header(context: context),
          body: TodoList(todos: todoModel.todos),
          floatingActionButtonLocation: ExpandableFab.location,
          floatingActionButton: const FloatingButton(),
        );
      },
      loading: () => Scaffold(
        appBar: Header(context: context),
        body: const LoadBody(),
      ),
      error: (error, stackTrace) => Scaffold(
        appBar: Header(context: context),
        body: const Center(child: NoAuth()),
      ),
    );
  }
}
