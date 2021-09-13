import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { SubcategoriesPageComponent } from './pages/subcategories-page/subcategories-page.component';

const routes: Routes = [
  {
    path: ':category',
    component: CategoriesPageComponent,
    // children: [
    //   {
    //     path: ':subcategory',
    //     component: SubcategoriesPageComponent,
    //   },
    // ],
  },
  {
    path: ':category/:sub',
    component: SubcategoriesPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MainRoutingModule { }
