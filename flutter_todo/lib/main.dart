import 'package:flutter/material.dart';
import 'package:flutter_todo/src/modules/signin/viewmodels/signin_viewmodel.dart';
import 'package:flutter_todo/src/modules/signup/viewmodels/signup_viewmodel.dart';
import 'package:flutter_todo/src/navigation/navigation.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

final signupViewmodelProvider =
    ChangeNotifierProvider((ref) => SignupViewmodel());
final signinViewModelProvider =
    ChangeNotifierProvider((ref) => SigninViewmodel());

void main() => runApp(const ProviderScope(child: Navigation()));
