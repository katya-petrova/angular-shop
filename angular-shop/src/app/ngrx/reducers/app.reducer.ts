import { ActionReducerMap } from '@ngrx/store';
import { categoriesReducer } from './categories.reducer';

export const appReducers: ActionReducerMap<any> = {
  categories: categoriesReducer,
};
