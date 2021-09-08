import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { IUserInfo } from '../models/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo$: EventEmitter<IUserInfo | null> = new EventEmitter();

  isLogged$: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  public isLogged() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getUserInfo(token);
      this.isLogged$.emit(true);
    } else {
      this.isLogged$.emit(false);
      this.userInfo$.emit(null);
    }
  }

  public getUserInfo(token: string) {
    const url = 'http://localhost:3004/users/userInfo';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    this.http.get<IUserInfo>(url, httpOptions).subscribe((info) => this.userInfo$.emit(info));
    this.userInfo$.subscribe((info) => console.log(info));
  }
}
