import { Profile } from './profile.model';

export interface Client {
  name: string;
  lastname: string;
  country: string;
  email: string;
  password?: string;
  profile: Profile;
  active: boolean;
  test: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserToken {
  name: string;
  lastname: string;
  country: string;
  email: string;
  active: boolean;
  exp: number;
  iat: number;
  uid: string;
  updatedAt: Date;
}
