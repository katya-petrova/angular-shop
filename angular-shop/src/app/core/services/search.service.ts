import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Item } from 'src/app/shared/models/igoods.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public url = 'http://localhost:3004/goods/search?text=';

  public searchResults$: EventEmitter<Item []> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public getSearchResults(value: string) {
    return this.http.get<Item []>(this.url + value)
      .subscribe((data) => this.searchResults$.emit(data));
  }
}
