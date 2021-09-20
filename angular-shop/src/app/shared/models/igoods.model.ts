export interface IGoods {
  category: {
    subcategory: Item[]
  }
}

export interface Item {
  id: string,
  name: string,
  imageUrls: string[],
  availableAmount: string,
  price: number,
  rating: number,
  description: string,
  isInCart: boolean,
  isFavorite: boolean,
  category: string,
  subCategory: string
}
