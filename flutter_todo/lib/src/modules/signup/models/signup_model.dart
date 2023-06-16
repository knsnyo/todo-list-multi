class SignupModel {
  final String id;
  final String password;

  SignupModel({required this.id, required this.password});

  Map<String, dynamic> toJson() => {
        "id": id,
        "password": password,
      };
}
