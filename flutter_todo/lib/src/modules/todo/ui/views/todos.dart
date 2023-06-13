import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/widget/header.dart';

class Todos extends StatelessWidget {
  const Todos({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Header(context: context),
      body: const Text('할일들'),
    );
  }
}
