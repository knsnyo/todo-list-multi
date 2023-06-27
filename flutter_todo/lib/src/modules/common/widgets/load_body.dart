import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';

class LoadBody extends HookWidget {
  const LoadBody({super.key});

  @override
  Widget build(BuildContext context) =>
      const Center(child: CircularProgressIndicator());
}
