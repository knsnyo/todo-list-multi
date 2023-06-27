import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
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
    final todoViewModel = ref.watch(todoViewModelProvider);
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
              onChangeText: (value) => todoViewModel.changeMemo = value,
            ),
            SizedBox(height: rem(2)),
            Button(
              onPress: () async {
                Response response = await todoViewModel.createTodo();
                if (201 != response.statusCode) {
                  ScaffoldMessenger.of(context)
                      .showSnackBar(SnackBar(content: Text('할일 등록 실패')));
                }
                Navigator.of(context).pop();
              },
              text: '등록',
            ),
          ],
        ),
      ),
    );
  }
}
