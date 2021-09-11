export interface IGoods {
  category: {
    subcategory: Item[]
  }
}

export interface Item {
  id: string,
  name: string,
  imageUrls: string[],
  availableAmount: number,
  price: number,
  description: string,
  isInCart: boolean,
  isFavorite: boolean,
}
