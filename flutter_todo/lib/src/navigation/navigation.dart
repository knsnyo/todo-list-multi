import 'package:flutter/material.dart';

import '../modules/signin/ui/views/signin.dart';
import '../modules/signup/ui/views/signup.dart';
import '../modules/todo/ui/views/create_todo.dart';
import '../modules/todo/ui/views/todo.dart';
import '../modules/todo/ui/views/todos.dart';
import '../modules/todo/ui/views/update_todo.dart';

final ThemeData theme = ThemeData();

class Navigation extends StatelessWidget {
  const Navigation({super.key});

  @override
  Widget build(BuildContext context) {
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
