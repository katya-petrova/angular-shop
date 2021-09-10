/* eslint-disable no-return-assign */
import { Component, OnInit } from '@angular/core';
import { ICategories, SubCategories } from 'src/app/core/models/categories.model';
import { CatalogueService } from 'src/app/core/services/catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories!:ICategories[];

  public subCategories!:any;

  constructor(public catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.catalogueService.getCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }

  getSubcategory(category: ICategories) {
    this.subCategories = category.subCategories;
  }
}
