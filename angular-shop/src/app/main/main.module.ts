import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MainSwiperComponent } from './components/main-swiper/main-swiper.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SubcategoriesPageComponent } from './pages/subcategories-page/subcategories-page.component';
import { MainRoutingModule } from './main-routing.module';
import { SortPipe } from './pipes/sort.pipe';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { StockDirective } from './directives/stock.directive';
import { AddToCartDirective } from './directives/add-to-cart.directive';
import { DeleteFromCartDirective } from './directives/delete-from-cart.directive';
import { AddToFavoriteDirective } from './directives/add-to-favorite.directive';
import { DeleteFromFavoriteDirective } from './directives/delete-from-favorite.directive';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [
    MainSwiperComponent,
    MainPageComponent,
    CategoriesPageComponent,
    SubcategoriesPageComponent,
    SortPipe,
    ItemPageComponent,
    StockDirective,
    AddToCartDirective,
    DeleteFromCartDirective,
    AddToFavoriteDirective,
    DeleteFromFavoriteDirective,
    FavoritePageComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MatIconModule,
    MainRoutingModule,
    NgbModule,
    MatButtonModule,
    MatTabsModule,
    MatTooltipModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class MainModule { }
