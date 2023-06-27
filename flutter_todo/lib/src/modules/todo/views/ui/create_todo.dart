import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/common/widgets/input.dart';
import 'package:flutter_todo/src/modules/todo/views/atoms/create_button.dart';

class CreateTodo extends HookWidget {
  const CreateTodo({super.key});

  @override
  Widget build(BuildContext context) {
    final memo = useState<String>('');
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
              onChangeText: (value) => memo.value = value,
            ),
            SizedBox(height: rem(2)),
            CreateButton(memo: memo.value),
          ],
        ),
      ),
    );
  }
}
