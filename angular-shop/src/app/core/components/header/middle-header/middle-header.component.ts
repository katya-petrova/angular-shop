import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.scss'],
})
export class MiddleHeaderComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  public showCatalogue = false;

  // constructor() { }

  ngOnInit(): void {
  }

  toggleCatalogue() {
    this.showCatalogue = !this.showCatalogue;
  }
}
