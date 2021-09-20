/* eslint-disable no-return-assign */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/core/models/categories.model';
import { CatalogueService } from 'src/app/core/services/catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categories!: ICategories[];

  public currentCategory!: string;

  public subCategories: any;

  public categoryId!: string;

  constructor(
    public catalogueService: CatalogueService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.catalogueService.getCategories().subscribe((data) => {
      this.categories = data;
      this.subCategories = this.categories[0].subCategories;
      this.currentCategory = this.categories[0].name;
      this.categoryId = this.categories[0].id;
    });
  }

  getSubcategory(category: ICategories) {
    this.subCategories = category.subCategories;
    this.currentCategory = category.name;
    this.categoryId = category.id;
  }

  public goToCatergoriesPage(url: string, id: string) {
    this.router.navigate([url, id]);
  }

  public test(url: string, id: string) {
    this.router.navigate([`${url}/${id}`]);
  }
}
