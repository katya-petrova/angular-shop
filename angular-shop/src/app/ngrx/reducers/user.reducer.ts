import { Action, createReducer, on } from '@ngrx/store';
import { addUser } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state.models';

export const reducer = createReducer(
  initialUserState,
  on(addUser, (state, { user }) => (
    { ...state, user: [user] })),
);

export function userReducer(state: IUserState, action: Action) {
  return reducer(state, action);
}
