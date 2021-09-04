/* eslint-disable no-return-assign */
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-categories-header',
  templateUrl: './categories-header.component.html',
  styleUrls: ['./categories-header.component.scss'],
})
export class CategoriesHeaderComponent implements OnInit {
  public response!: any;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe((response) => {
        setTimeout(() => {
          this.response = response;
        }, 500);
      });
  }
}
