export interface AccountDto {
  id: string;
  url: string;
  login: string;
  password: string;
  userId: number;
}

export interface UserDto {
  id: string;
  name: string;
  surname: string;
  login: string;
  password: string;
  accounts: AccountDto[];
}

export interface IResponse {
  payload: unknown;
  error: boolean;
  errorCode: string;
  msg: string;
}

export interface UserFullApi {
  id: string;
  name: string;
  surname: string;
  login?: string;
  email?: string;
  password: string;
  accounts: AccountDto[];
}

export interface UserShortApi {
  login: string;
  password: string;
}

export interface EmailSenderApi {
  email: string;
  userId: string;
}
