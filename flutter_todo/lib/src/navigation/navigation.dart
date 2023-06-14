import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/signin/views/signin.dart';
import 'package:flutter_todo/src/modules/signup/views/signup_view.dart';
import 'package:flutter_todo/src/modules/todo/views/create_todo.dart';
import 'package:flutter_todo/src/modules/todo/views/todo.dart';
import 'package:flutter_todo/src/modules/todo/views/todos.dart';
import 'package:flutter_todo/src/modules/todo/views/update_todo.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

final ThemeData theme = ThemeData();

class Navigation extends HookConsumerWidget {
  const Navigation({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return MaterialApp(
      builder: (BuildContext context, Widget? child) => MediaQuery(
        data: MediaQuery.of(context).copyWith(textScaleFactor: 1),
        child: child!,
      ),
      debugShowCheckedModeBanner: false,
      theme: theme.copyWith(
        colorScheme: theme.colorScheme
            .copyWith(primary: Colors.black, secondary: Colors.white),
      ),
      title: 'typing.worknsn',
      initialRoute: '/todos',
      routes: {
        '/signin': (context) => const Signin(),
        '/signup': (context) => const Signup(),
        '/todos': (context) => const Todos(),
        '/todo': (context) => const Todo(),
        '/create': (context) => const CreateTodo(),
        '/update': (context) => const UpdateTodo(),
      },
    );
  }
}
