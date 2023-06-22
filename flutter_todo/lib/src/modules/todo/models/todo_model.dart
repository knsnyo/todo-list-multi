class TodoModel {
  // final int idx;
  // final int user;
  final String memo;

  TodoModel({
    // required this.idx,
    // required this.user,
    required this.memo,
  });

  factory TodoModel.fromJson(Map<String, String> json) => TodoModel(
        // idx: json['idx'] as int,
        // user: json['id'] as int,
        memo: json['memo'] as String,
      );
}
