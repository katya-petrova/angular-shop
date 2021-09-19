import { createSelector } from '@ngrx/store';
import { IAppState, IUserState } from '../state.models';

const userState = (state: IAppState) => state.user;

export const getUser = createSelector(
  userState,
  (state: IUserState) => state.user,
);
