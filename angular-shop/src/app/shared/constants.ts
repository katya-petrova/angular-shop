/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
import { IUserInfo } from './models/user-info.model';

export let anonimus: IUserInfo = {
  firstName: '',
  lastName: '',
  token: 'anon',
  login: '',
  password: '',
  cart: [],
  favorites: [],
  orders: [],
};
