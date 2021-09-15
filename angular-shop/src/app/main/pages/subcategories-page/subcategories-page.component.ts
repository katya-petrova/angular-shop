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
  categoryId!: string;

  subcategoryId!: string;

  products!: Item[];

  currentRate = 3.14;

  constructor(
    private route: ActivatedRoute,
    public categoriesService: CategoriesService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params.category;
    this.subcategoryId = this.route.snapshot.params.sub;
    this.categoriesService
      .getItemsByCategory(this.categoryId, this.subcategoryId)
      .subscribe((data) => {
        this.products = data;
        console.log(data);
      });
  }
}
