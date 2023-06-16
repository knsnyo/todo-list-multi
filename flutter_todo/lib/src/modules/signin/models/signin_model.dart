class SigninModel {
  final String id;
  final String password;

  SigninModel({required this.id, required this.password});

  Map<String, dynamic> toJson() => {
        "id": id,
        "password": password,
      };
}
