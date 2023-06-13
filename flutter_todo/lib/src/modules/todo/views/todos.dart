import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/widgets/header.dart';
import 'package:flutter_todo/src/modules/todo/widgets/blocks/no_auth.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class Todos extends HookConsumerWidget {
  const Todos({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: Header(context: context),
      body: const Center(child: NoAuth()),
    );
  }
}
