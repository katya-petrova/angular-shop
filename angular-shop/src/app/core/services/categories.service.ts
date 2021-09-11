import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  public url = 'http://localhost:3004/categories';

  constructor(private http: HttpClient) { }

  getCategories():Observable<ICategories> {
    return this.http.get<ICategories>(this.url);
    // .pipe(
    //   map((response: ICategories) => {
    //     const categories: string[] = response.subCategories.map((item:any) => item.name);
    //     console.log(categories);
    //     console.log('work');
    //     return categories;
    //   }),
    // );
  }
}
