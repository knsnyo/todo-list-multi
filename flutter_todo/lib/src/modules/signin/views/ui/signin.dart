import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/signin/views/blocks/signin_form.dart';

class Signin extends HookWidget {
  const Signin({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: Header(context: context),
      body: const Center(child: SigninForm()),
    );
  }
}
