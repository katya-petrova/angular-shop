import { ActionReducerMap } from '@ngrx/store';
import { categoriesReducer } from './categories.reducer';
import { userReducer } from './user.reducer';

export const appReducers: ActionReducerMap<any> = {
  categories: categoriesReducer,
  user: userReducer,
};
