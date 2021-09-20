/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/core/services/location.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {
  public panelOpenState = false;

  public ipaddress:string = '';

  public city:string = '';

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data: any) => {
      this.city = data.city;
    });
  }
}
