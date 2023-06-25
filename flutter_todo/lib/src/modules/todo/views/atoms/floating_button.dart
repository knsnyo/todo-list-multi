import 'package:flutter/material.dart';
import 'package:flutter_expandable_fab/flutter_expandable_fab.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:flutter_todo/src/modules/common/storage/secure_storage.dart';

class FloatingButton extends HookWidget {
  const FloatingButton({super.key});

  @override
  Widget build(BuildContext context) {
    return ExpandableFab(
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
                Navigator.of(context).pushNamed('/create');
              },
              child: const Icon(Icons.edit),
            ),
            FloatingActionButton.small(
              heroTag: null,
              backgroundColor: Colors.black,
              onPressed: () async {
                await deleteAllToken();
                Navigator.of(context)
                    .pushNamedAndRemoveUntil('/todos', (route) => false);
              },
              child: const Icon(Icons.person),
            ),
          ],
        ),
      ],
    );
  }
}
