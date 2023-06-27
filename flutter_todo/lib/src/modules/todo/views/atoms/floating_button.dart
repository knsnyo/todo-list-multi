import 'package:flutter/material.dart';
import 'package:flutter_expandable_fab/flutter_expandable_fab.dart';
import 'package:flutter_todo/main.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

class FloatingButton extends HookConsumerWidget {
  const FloatingButton({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final todoNotifier = ref.watch(todoViewModelProvider.notifier);
    final key = GlobalKey<ExpandableFabState>();
    return ExpandableFab(
      key: key,
      backgroundColor: Colors.black,
      closeButtonStyle: const ExpandableFabCloseButtonStyle(
        child: Icon(Icons.close),
        backgroundColor: Colors.black,
      ),
      overlayStyle: ExpandableFabOverlayStyle(
        color: Colors.black.withOpacity(0.5),
      ),
      fanAngle: 90,
      distance: 50,
      child: const Icon(Icons.add),
      children: [
        Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            FloatingActionButton.small(
              heroTag: null,
              backgroundColor: Colors.black,
              onPressed: () {
                key.currentState!.toggle();
                Navigator.of(context).pushNamed('/create');
              },
              child: const Icon(Icons.edit),
            ),
            FloatingActionButton.small(
              heroTag: null,
              backgroundColor: Colors.black,
              onPressed: () async {
                await deleteAllToken().then((_) => todoNotifier.refresh());
              },
              child: const Icon(Icons.person),
            ),
          ],
        ),
      ],
    );
  }
}
