import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  SwiperOptions, Autoplay, Pagination, Navigation,
} from 'swiper';
import { SaleService } from '../../services/sale.service';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-main-swiper',
  templateUrl: './main-swiper.component.html',
  styleUrls: ['./main-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainSwiperComponent implements OnInit {
  constructor(public saleService: SaleService) { }

  ngOnInit(): void {
    this.saleService.getSaleGoods().subscribe((data) => console.log(data));
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
}
