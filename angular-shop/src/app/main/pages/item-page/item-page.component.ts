import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Item } from 'src/app/shared/models/igoods.model';
// import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { ItemOptionsService } from '../../services/item-options.service';

SwiperCore.use([Navigation, Thumbs]);

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemPageComponent implements OnInit {
  itemId!: string;

  item!: Item;

  images!: string[];

  thumbsSwiper: any;

  constructor(
    private route: ActivatedRoute,
    public categoriesService: CategoriesService,
    private itemOptionsService: ItemOptionsService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.itemId = params.id;
      this.categoriesService.getItemById(this.itemId).subscribe((data) => {
        this.item = data;
        this.images = data.imageUrls;
      });
    });
  }

  public addToCart(id: string) {
    this.itemOptionsService.addToCart(id).subscribe();
    this.itemOptionsService.updateUserInfo();
  }

  public deleteFromCart(id: string) {
    this.itemOptionsService.deleteFromCart(id).subscribe();
    this.itemOptionsService.updateUserInfo();
  }

  public addToFavorite(id: string) {
    this.itemOptionsService.addToFavorite(id).subscribe();
    this.itemOptionsService.updateUserInfo();
  }

  public deleteFromFavorite(id: string) {
    this.itemOptionsService.deleteFromFavorite(id).subscribe();
    this.itemOptionsService.updateUserInfo();
  }
}
