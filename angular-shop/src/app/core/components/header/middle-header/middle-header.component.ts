import {
  Component, OnDestroy, OnInit, ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from 'src/app/core/services/search.service';
import { getUser } from 'src/app/ngrx/selectors/user.selector';
import { IAppState } from 'src/app/ngrx/state.models';
import { IUserInfo } from 'src/app/shared/models/user-info.model';

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.scss'],
})
export class MiddleHeaderComponent implements OnInit, OnDestroy {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  public showCatalogue = false;

  public searchValue!: string;

  public searchValueUpdate = new Subject<string>();

  public showResults = false;

  public itemsInCart!: number;

  public userSubscription!: Subscription;

  constructor(public searchService: SearchService, private store: Store<IAppState>) {}

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
    this.userSubscription = this.store.select<IUserInfo[]>(getUser)
      .subscribe((user: IUserInfo[]) => {
        if (user[0]) {
          this.itemsInCart = user[0].cart.length;
        }
      });
  }

  toggleCatalogue() {
    this.showCatalogue = !this.showCatalogue;
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
