import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subcategories-page',
  templateUrl: './subcategories-page.component.html',
  styleUrls: ['./subcategories-page.component.scss'],
})
export class SubcategoriesPageComponent implements OnInit {
  categoryId!: string;

  subcategoryId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params.category;
    this.subcategoryId = this.route.snapshot.params.sub;
    console.log(this.route.snapshot.params);
  }
}
