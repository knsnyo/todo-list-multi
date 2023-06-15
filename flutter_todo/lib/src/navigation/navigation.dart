import 'package:flutter/material.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/signin/views/signin.dart';
import 'package:flutter_todo/src/modules/signup/view/ui/signup.dart';
import 'package:flutter_todo/src/modules/todo/views/create_todo.dart';
import 'package:flutter_todo/src/modules/todo/views/todo.dart';
import 'package:flutter_todo/src/modules/todo/views/todos.dart';
import 'package:flutter_todo/src/modules/todo/views/update_todo.dart';

final ThemeData theme = ThemeData();

class Navigation extends HookWidget {
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
      onGenerateRoute: (RouteSettings settings) {
        switch (settings.name) {
          case '/signin':
            return _buildSlideTransitionRoute(const Signin());
          case '/signup':
            return _buildSlideTransitionRoute(const Signup());
          case '/todos':
            return _buildSlideTransitionRoute(const Todos());
          case '/todo':
            return _buildSlideTransitionRoute(const Todo());
          case '/create':
            return _buildSlideTransitionRoute(const CreateTodo());
          case '/update':
            return _buildSlideTransitionRoute(const UpdateTodo());
          default:
            return null;
        }
      },
    );
  }
}

Route _buildSlideTransitionRoute(Widget widget) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => widget,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      const begin = Offset(1.0, 0.0);
      const end = Offset.zero;
      const curve = Curves.ease;

      var tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}
