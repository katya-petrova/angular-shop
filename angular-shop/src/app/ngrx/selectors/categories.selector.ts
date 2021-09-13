import { createSelector } from '@ngrx/store';
import { IAppState, ICategoriesState } from '../state.models';

const categoriesState = (state: IAppState) => state.categories;

export const getCategories = createSelector(
  categoriesState,
  (state: ICategoriesState) => state.categories,
);
