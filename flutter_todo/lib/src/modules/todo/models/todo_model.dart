class TodoModel {
  final int idx;
  final int user;
  final String memo;

  TodoModel({
    required this.idx,
    required this.user,
    required this.memo,
  });

  factory TodoModel.fromJson(Map<String, dynamic> json) => TodoModel(
        idx: json['idx'] as int,
        user: json['user'] as int,
        memo: json['memo'].toString(),
      );
}
