import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class ErrorBody extends HookWidget {
  const ErrorBody({super.key});

  @override
  Widget build(BuildContext context) => const Center(child: Text('오류 발생'));
}
