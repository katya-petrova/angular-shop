import { ICategories } from '../core/models/categories.model';
import { IUserInfo } from '../shared/models/user-info.model';

export interface ICategoriesState {
  categories: ICategories[],
}

export const initialCategoriesState: ICategoriesState = {
  categories: [],
};

export interface IUserState {
  user: IUserInfo[],
}

export const initialUserState: IUserState = {
  user: [],
};

export interface IAppState {
  categories: ICategoriesState,
  user: IUserState,
}

export const initialAppState: IAppState = {
  categories: initialCategoriesState,
  user: initialUserState,
};
