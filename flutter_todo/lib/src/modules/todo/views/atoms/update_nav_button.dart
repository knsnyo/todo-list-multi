import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class UpdateNavButton extends HookWidget {
  final int idx;
  const UpdateNavButton({super.key, required this.idx});
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.of(context).pushNamed('/update', arguments: idx),
      child: const Text(
        '수정',
        style: TextStyle(color: Colors.blue),
      ),
    );
  }
}
