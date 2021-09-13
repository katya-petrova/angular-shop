import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ICategories } from 'src/app/core/models/categories.model';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit, OnDestroy {
  public resultId = '';

  public categories!:any;

  public currentCategory!:ICategories;

  public subCategories!: any;

  public categoryName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public categoriesService: CategoriesService,
  ) {}

  ngOnInit(): void {
    this.resultId = this.route.snapshot.params.category;
    this.getCurrentCategory(this.resultId);
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.resultId = val.url.toString().slice(1);
        this.getCurrentCategory(this.resultId);
      }
    });
  }

  getCurrentCategory(value:string) {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
      this.currentCategory = this.categories.find((obj:ICategories) => obj.id === value);
      this.subCategories = this.currentCategory.subCategories;
      console.log('i work');
      this.categoryName = this.currentCategory.name;
    });
  }

  ngOnDestroy() {
    console.log('i destroyed');
  }
}
