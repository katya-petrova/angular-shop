/* eslint-disable prefer-destructuring */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICategories } from 'src/app/core/models/categories.model';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { getCategories } from 'src/app/ngrx/selectors/categories.selector';
import { IAppState } from 'src/app/ngrx/state.models';

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
    private store: Store<IAppState>,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.route.params.subscribe((val) => {
        this.resultId = val.category;
        this.getCurrentCategory(this.resultId);
      });
    }, 400);
  }

  getCurrentCategory(value:string) {
    this.store.select<ICategories[]>(getCategories).subscribe((data) => {
      this.categories = data;
      this.currentCategory = this.categories.find((obj:ICategories) => obj.id === value);
      this.subCategories = this.currentCategory.subCategories;
      this.categoryName = this.currentCategory.name;
    });
  }

  ngOnDestroy() {

  }
}
