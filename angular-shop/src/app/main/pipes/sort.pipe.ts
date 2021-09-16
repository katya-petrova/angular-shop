import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/shared/models/igoods.model';

@Pipe({
  name: 'sortPipe',
})
export class SortPipe implements PipeTransform {
  transform(items: Item[], order: number): Item[] {
    if (order === 1 || order === -1) {
      return items
        .sort((a, b) => (+a.price - +b.price) * order);
    }

    if (order === 2 || order === -2) {
      return items
        .sort((a, b) => (+a.rating - +b.rating) * order);
    }

    return items;
  }
}
