interface SubCategories {
  id: string;
  name: string;
}

export interface ICategories {
  id: string;
  name: string;
  subCategories: SubCategories;
}
