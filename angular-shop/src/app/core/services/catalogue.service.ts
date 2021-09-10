import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
import { ICategories } from '../models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  constructor(private http: HttpClient) {}

  getCategories() {
    const url = 'http://localhost:3004/categories';
    return this.http.get<ICategories[]>(url);
  }

  // getCategories222() {
  //   const url = 'http://localhost:3004/categories';
  //   return this.http.get<ICategories>(url).pipe(
  //     map((categories: any) => {
  //       const idList = categories
  //         .map((item: any) => item.subCategories
  //           .map((sub: any) => sub.name));
  //       return idList;
  //     }),
  //   );
  // }
}
