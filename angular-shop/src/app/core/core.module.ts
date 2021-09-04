import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/header/top-header/top-header.component';
import { MiddleHeaderComponent } from './components/header/middle-header/middle-header.component';
import { CategoriesHeaderComponent } from './components/header/categories-header/categories-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TopHeaderComponent,
    MiddleHeaderComponent,
    CategoriesHeaderComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
