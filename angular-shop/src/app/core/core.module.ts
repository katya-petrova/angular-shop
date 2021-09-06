import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/header/top-header/top-header.component';
import { MiddleHeaderComponent } from './components/header/middle-header/middle-header.component';
import { CategoriesHeaderComponent } from './components/header/categories-header/categories-header.component';
import { AccountDropdownComponent } from './components/header/middle-header/account-dropdown/account-dropdown.component';
import { MainModule } from '../main/main.module';

@NgModule({
  declarations: [
    HeaderComponent,
    TopHeaderComponent,
    MiddleHeaderComponent,
    CategoriesHeaderComponent,
    AccountDropdownComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    MainModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule { }
