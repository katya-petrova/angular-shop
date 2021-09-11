import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/igoods.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public searchResults!: Item [];

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchResults$.subscribe((data) => {
      this.searchResults = data;
      console.log(data);
    });
  }
}
