import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MainSwiperComponent } from './components/main-swiper/main-swiper.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    MainSwiperComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ],
  exports: [
    MainPageComponent,
  ],
})
export class MainModule { }
