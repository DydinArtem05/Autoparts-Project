export class AuthDto {
  login: string;
  password: string;
}

export class LogouthDto {
  token: string;
}

export class UserIdDto {
  userId: string;
}

export class ChangePasswordDto extends UserIdDto{
  newPassword: string;
}

export class RegistrationDto extends AuthDto{
  name: string;
  surname: string;
}