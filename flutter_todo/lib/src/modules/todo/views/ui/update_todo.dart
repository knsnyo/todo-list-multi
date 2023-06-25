import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';

class UpdateTodo extends HookWidget {
  final int idx;

  const UpdateTodo({
    super.key,
    required this.idx,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Header(context: context),
      body: const Text('할일 수정'),
    );
  }
}
