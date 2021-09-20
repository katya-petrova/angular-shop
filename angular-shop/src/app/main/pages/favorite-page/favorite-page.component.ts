/* eslint-disable no-return-assign */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { getUser } from 'src/app/ngrx/selectors/user.selector';
import { IAppState } from 'src/app/ngrx/state.models';
import { Item } from 'src/app/shared/models/igoods.model';
import { IUserInfo } from 'src/app/shared/models/user-info.model';
import { ItemOptionsService } from '../../services/item-options.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss'],
})
export class FavoritePageComponent implements OnInit {
  public favoritesArr!: string[];

  public favoriteItems!: Item[];

  public userSubscription!: Subscription;

  constructor(
    private store: Store<IAppState>,
    private categoriesService: CategoriesService,
    private itemOptionsService: ItemOptionsService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.userSubscription = this.store
        .select<IUserInfo[]>(getUser)
        .subscribe((user: IUserInfo[]) => {
          this.favoritesArr = user[0].favorites;
        });
      this.categoriesService
        .getItemsArr(this.favoritesArr)
        .subscribe((data) => (this.favoriteItems = data));
    }, 500);
  }

  public addToCart(id: string) {
    this.itemOptionsService.addToCart(id).subscribe();
    this.itemOptionsService.updateUserInfo();
  }

  public deleteFromCart(id: string) {
    this.itemOptionsService.deleteFromCart(id).subscribe();
    this.itemOptionsService.updateUserInfo();
  }

  public deleteFromFavorite(id: string) {
    this.itemOptionsService.deleteFromFavorite(id).subscribe();
    this.itemOptionsService.updateUserInfo();
  }
}
