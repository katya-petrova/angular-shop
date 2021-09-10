import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICategories } from 'src/app/core/models/categories.model';

@Injectable({
  providedIn: 'root',
})
export class SaleService {
  constructor(private http: HttpClient) { }

  getSaleGoods() {
    const url = 'http://localhost:3004/categories';
    return this.http.get<ICategories>(url).pipe(
      map((videoResponse: any) => {
        const idList = videoResponse.map((item:any) => item.subCategories
          .map((sub:any) => sub.name));
        return idList;
      }),
    );
  }
}
