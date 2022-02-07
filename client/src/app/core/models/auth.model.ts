export interface UserForm {
  email: string;
  password: string;
}
export interface UserApi {
  ok: boolean;
  token: string;
  profile: {
    url: string;
    public_id: string;
  };
}
