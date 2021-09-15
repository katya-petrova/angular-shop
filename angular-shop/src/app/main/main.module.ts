import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainSwiperComponent } from './components/main-swiper/main-swiper.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SubcategoriesPageComponent } from './pages/subcategories-page/subcategories-page.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainSwiperComponent,
    MainPageComponent,
    CategoriesPageComponent,
    SubcategoriesPageComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MatIconModule,
    MainRoutingModule,
    NgbModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class MainModule { }
