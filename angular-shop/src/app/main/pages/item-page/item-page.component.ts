import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Item } from 'src/app/shared/models/igoods.model';
// import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Navigation, Thumbs } from 'swiper';

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
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.params.id;
    this.categoriesService.getItemById(this.itemId).subscribe((data) => {
      this.item = data;
      this.images = data.imageUrls;
      console.log(this.item);
    });
    console.log(this.itemId);
  }
}
