import 'package:flutter/material.dart';
import 'package:flutter_todo/src/navigation/navigation.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

void main() => runApp(const ProviderScope(child: Navigation()));
