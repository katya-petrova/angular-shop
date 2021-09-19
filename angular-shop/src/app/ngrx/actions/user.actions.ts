import { createAction, props } from '@ngrx/store';
import { IUserInfo } from 'src/app/shared/models/user-info.model';

enum CustomActionTypes {
  addUser = 'Add User',
  deleteUser = 'Delete User',
}

export const addUser = createAction(
  CustomActionTypes.addUser,
  props<{ user: IUserInfo }>(),
);

export const deleteUser = createAction(
  CustomActionTypes.deleteUser,
);
