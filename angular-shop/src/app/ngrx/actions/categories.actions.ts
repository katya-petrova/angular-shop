import { createAction, props } from '@ngrx/store';
import { ICategories } from 'src/app/core/models/categories.model';

export enum CategoriesActionTypes {
  saveCategories = 'Save Categories',
}

export const saveCategories = createAction(
  CategoriesActionTypes.saveCategories,
  props<{ categories: ICategories[] }>(),
);
