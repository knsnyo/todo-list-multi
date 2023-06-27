import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/signin/viewmodels/signin_viewmodel.dart';
import 'package:flutter_todo/src/modules/signup/models/signup_model.dart';
import 'package:flutter_todo/src/modules/signup/viewmodels/signup_viewmodel.dart';
import 'package:flutter_todo/src/modules/todo/viewmodels/todo_viewmodel.dart';
import 'package:flutter_todo/src/navigation/navigation.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

final signupViewModelProvider =
    StateNotifierProvider<SignupViewModel, SignupModel>(
        (ref) => SignupViewModel());
final signinViewModelProvider =
    ChangeNotifierProvider((ref) => SigninViewModel());
final todoViewModelProvider = ChangeNotifierProvider((ref) => TodoViewModel());

void main() => runApp(const ProviderScope(child: Navigation()));
