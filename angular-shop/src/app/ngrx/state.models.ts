import { ICategories } from '../core/models/categories.model';

export interface ICategoriesState {
  categories: ICategories[],
}

export const initialCategoriesState: ICategoriesState = {
  categories: [],
};

export interface IAppState {
  categories: ICategoriesState,
}

export const initialAppState: IAppState = {
  categories: initialCategoriesState,
};
