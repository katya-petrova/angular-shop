/* eslint-disable no-return-assign */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICategories } from 'src/app/core/models/categories.model';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { saveCategories } from 'src/app/ngrx/actions/categories.actions';
import { IAppState } from 'src/app/ngrx/state.models';

@Component({
  selector: 'app-categories-header',
  templateUrl: './categories-header.component.html',
  styleUrls: ['./categories-header.component.scss'],
})
export class CategoriesHeaderComponent implements OnInit {
  public response!: ICategories[];

  constructor(private categoriesService: CategoriesService, private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe((response) => {
        setTimeout(() => {
          this.store.dispatch(saveCategories({ categories: response }));
          this.response = response;
        }, 500);
      });
  }
}
