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
  payload: Object;
  error: boolean;
  errorCode: string;
  msg: string;
}

export interface UserApi {
  id: string;
  name: string;
  surname: string;
  login?: string;
  email?: string;
  password: string;
  accounts: AccountDto[];
}
