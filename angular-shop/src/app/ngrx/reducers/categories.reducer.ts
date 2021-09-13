import { Action, createReducer, on } from '@ngrx/store';
import { ICategoriesState, initialCategoriesState } from '../state.models';
import { saveCategories } from '../actions/categories.actions';

export const reducer = createReducer(
  initialCategoriesState,
  on(saveCategories, (state, { categories }) => ({ ...state, categories: [...categories] })),
);

export function categoriesReducer(state: ICategoriesState, action: Action) {
  return reducer(state, action);
}
