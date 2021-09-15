import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    // .pipe(
    //   map((response: ICategories) => {
    //     const categories: string[] = response.subCategories.map((item:any) => item.name);
    //     console.log(categories);
    //     console.log('work');
    //     return categories;
    //   }),
    // );
  }

  getItemsByCategory(category: string, subcategory: string) {
    const url = `${this.url}/goods/category/${category}/${subcategory}?start=1&count=6`;
    return this.http.get<Item[]>(url);
  }
}
