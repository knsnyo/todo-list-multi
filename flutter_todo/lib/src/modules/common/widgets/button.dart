import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/common/styles/size.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class Button extends HookConsumerWidget {
  final void Function() onPress;
  final String text;

  const Button({super.key, required this.onPress, required this.text});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    Color black = Theme.of(context).colorScheme.primary;
    Color white = Theme.of(context).colorScheme.secondary;

    return GestureDetector(
      onTap: onPress,
      child: Container(
        width: vw(context, 70),
        padding: EdgeInsets.all(rem(2)),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(rem(4))),
          color: black,
        ),
        child: Text(
          text,
          textAlign: TextAlign.center,
          style: TextStyle(
            color: white,
            fontSize: rem(2),
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}
