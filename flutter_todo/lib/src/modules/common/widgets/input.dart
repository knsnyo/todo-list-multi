import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class Input extends HookConsumerWidget {
  final controller = useTextEditingController();
  final String hint;
  final bool obscureText;

  Input({
    super.key,
    required this.hint,
    required this.obscureText,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return SizedBox(
      width: vw(context, 70),
      child: TextField(
        controller: controller,
        obscureText: obscureText,
        textAlign: TextAlign.center,
        decoration: InputDecoration(
          hintText: hint,
          border: UnderlineInputBorder(
            borderSide: BorderSide(
              color: Colors.grey,
              width: rem(0.1),
            ),
          ),
          enabledBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: Colors.grey,
              width: rem(0.1),
            ),
          ),
          focusedBorder: UnderlineInputBorder(
            borderSide: BorderSide(
              color: Colors.grey,
              width: rem(0.1),
            ),
          ),
        ),
      ),
    );
  }
}
