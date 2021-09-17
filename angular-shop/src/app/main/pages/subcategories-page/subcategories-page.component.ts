import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Item } from 'src/app/shared/models/igoods.model';

@Component({
  selector: 'app-subcategories-page',
  templateUrl: './subcategories-page.component.html',
  styleUrls: ['./subcategories-page.component.scss'],
})
export class SubcategoriesPageComponent implements OnInit {
  public categoryId!: string;

  public subcategoryId!: string;

  public products!: Item[];

  public startPage = 0;

  public paginationLimit = 6;

  public sortValue!: number;

  constructor(
    private route: ActivatedRoute,
    public categoriesService: CategoriesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log('hello from subs');
    this.categoryId = this.route.snapshot.params.category;
    this.subcategoryId = this.route.snapshot.params.sub;
    this.categoriesService
      .getItemsByCategory(this.categoryId, this.subcategoryId)
      .subscribe((data) => {
        this.products = data;
      });
  }

  public showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 3;
  }

  public sortByPrice() {
    this.sortValue = this.sortValue === 1 ? -1 : 1;
  }

  public sortByRating() {
    this.sortValue = this.sortValue === 2 ? -2 : 2;
  }

  public goToItemPage(url: string, id: string) {
    this.router.navigate([url, id]);
  }
}
