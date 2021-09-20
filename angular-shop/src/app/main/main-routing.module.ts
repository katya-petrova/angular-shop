import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { SubcategoriesPageComponent } from './pages/subcategories-page/subcategories-page.component';

const routes: Routes = [
  {
    path: ':category',
    component: CategoriesPageComponent,
  },
  {
    path: ':category/:sub',
    component: SubcategoriesPageComponent,
  },
  {
    path: ':category/:sub/:id',
    component: ItemPageComponent,
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
