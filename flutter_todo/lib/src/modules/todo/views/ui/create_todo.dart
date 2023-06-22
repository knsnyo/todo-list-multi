import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';

class CreateTodo extends StatelessWidget {
  const CreateTodo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Header(context: context),
      body: const Text('할일 등록'),
    );
  }
}
