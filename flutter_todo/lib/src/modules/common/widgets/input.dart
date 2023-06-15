import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class Input extends HookConsumerWidget {
  final String hint;
  final bool obscureText;
  final void Function(String value) onChangeText;

  const Input({
    super.key,
    required this.hint,
    required this.obscureText,
    required this.onChangeText,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return SizedBox(
      width: vw(context, 70),
      child: TextField(
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
        onChanged: (value) => onChangeText(value),
      ),
    );
  }
}
