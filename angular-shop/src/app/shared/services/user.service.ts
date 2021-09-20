import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUser } from 'src/app/ngrx/actions/user.actions';
import { IAppState } from 'src/app/ngrx/state.models';
import { IUserInfo } from '../models/user-info.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo$: EventEmitter<IUserInfo | null> = new EventEmitter();

  // isLogged$: EventEmitter<boolean> = new EventEmitter();

  test!:boolean;

  constructor(private http: HttpClient, private store: Store<IAppState>) { }

  public isLogged() {
    const token = localStorage.getItem('token');
    if (token) {
      this.getUserInfo(token);
    } else {
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
    this.http.get<IUserInfo>(url, httpOptions)
      .subscribe((user) => this.store.dispatch(addUser({ user })));
    this.userInfo$.subscribe((info) => console.log(info));
  }
}
