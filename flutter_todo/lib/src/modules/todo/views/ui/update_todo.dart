import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/common/widgets/button.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';
import 'package:flutter_todo/src/modules/todo/models/todo_model.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class UpdateTodo extends HookConsumerWidget {
  final int idx;
  const UpdateTodo({super.key, required this.idx});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoViewmodel = ref.watch(todoViewmodelProvider);
    return Scaffold(
      appBar: Header(context: context),
      body: FutureBuilder(
        future: todoViewmodel.getTodo(idx),
        builder: (context, snapshot) {
          if (!snapshot.hasData) {
            return const CircularProgressIndicator();
          }
          TodoModel todo = snapshot.data!;
          return Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text('할일 수정'),
                SizedBox(height: rem(2)),
                Input(
                  init: todo.memo,
                  hint: '할일 입력',
                  obscureText: false,
                  onChangeText: (value) => todoViewmodel.changeMemo = value,
                ),
                SizedBox(height: rem(2)),
                Button(
                  onPress: () async {
                    Response response = await todoViewmodel.updateTodo(idx);
                    if (201 != response.statusCode) {
                      ScaffoldMessenger.of(context)
                          .showSnackBar(SnackBar(content: Text('할일 수정 실패')));
                    }
                    Navigator.of(context).pushNamedAndRemoveUntil(
                        '/todo', (route) => route.isFirst,
                        arguments: idx);
                  },
                  text: '수정',
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}
