import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILocation, Ip } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) { }

  getIpAddress():Observable<Ip> {
    return this.http
      .get<Ip>('https://api.ipify.org/?format=json')
      .pipe(
        catchError(this.handleError),
      );
  }

  getGEOLocation(ip: any):Observable<ILocation> {
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=599feeb3f0d6487e92b11fb0275f0dd0&ip=${ip}`;
    return this.http
      .get<ILocation>(url)
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, `
        + `body was: ${error.error}`,
      );
    }
    return throwError(
      'Something bad happened; please try again later.',
    );
  }
}
