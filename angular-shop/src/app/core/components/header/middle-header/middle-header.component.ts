import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.scss'],
})
export class MiddleHeaderComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  public showCatalogue = false;

  public searchValue!: string;

  public searchValueUpdate = new Subject<string>();

  public showResults = false;

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.searchValueUpdate
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe((value) => {
        if (value.length >= 2) {
          this.searchService.getSearchResults(value);
          this.showResults = true;
        } else {
          this.showResults = false;
        }
      });
  }

  toggleCatalogue() {
    this.showCatalogue = !this.showCatalogue;
  }
}
