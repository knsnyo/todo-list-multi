import 'package:flutter/material.dart';

class Header extends AppBar {
  Header({super.key, required BuildContext context})
      : super(
          backgroundColor: Theme.of(context).colorScheme.primary,
          title: const Text('Todo - Flutter'),
          centerTitle: true,
          elevation: 0,
        );
}
