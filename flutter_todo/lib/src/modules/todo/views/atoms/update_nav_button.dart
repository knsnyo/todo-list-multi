import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class UpdateNavButton extends HookWidget {
  final int idx;
  const UpdateNavButton({super.key, required this.idx});

  @override
  Widget build(BuildContext context) {
    final navigator = Navigator.of(context);
    return GestureDetector(
      onTap: () => navigator.pushNamed('/update', arguments: idx),
      child: const Text(
        '수정',
        style: TextStyle(color: Colors.blue),
      ),
    );
  }
}
