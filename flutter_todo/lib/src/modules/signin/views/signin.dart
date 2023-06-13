import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';

class Signin extends StatelessWidget {
  const Signin({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Header(context: context),
      body: const Text('로그인'),
    );
  }
}
