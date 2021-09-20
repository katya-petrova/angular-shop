/* eslint-disable no-plusplus */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/igoods.model';
import { ICategories } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public url = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  getCategories():Observable<ICategories[]> {
    return this.http.get<ICategories[]>('http://localhost:3004/categories');
  }

  getItemsByCategory(category: string, subcategory: string) {
    const url = `${this.url}/goods/category/${category}/${subcategory}?start=1&count=20`;
    return this.http.get<Item[]>(url);
  }

  getItemById(id: string) {
    const url = `${this.url}/goods/item/${id}`;
    return this.http.get<Item>(url);
  }

  getItemsArr(ids: string[]) {
    const requests = [];
    for (let i = 0; i < ids.length; i++) {
      requests.push(this.http.get<Item>(`${this.url}/goods/item/${ids[i]}`));
    }
    return forkJoin(requests);
  }
}
