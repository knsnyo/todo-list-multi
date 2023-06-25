import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class TodoItem extends HookConsumerWidget {
  final int idx;
  final String text;
  const TodoItem({
    super.key,
    required this.idx,
    required this.text,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Padding(
      padding: EdgeInsets.all(rem(2)),
      child: Center(
        child: GestureDetector(
          onTap: () => Navigator.of(context).pushNamed('/todo', arguments: idx),
          child: Text(text),
        ),
      ),
    );
  }
}
