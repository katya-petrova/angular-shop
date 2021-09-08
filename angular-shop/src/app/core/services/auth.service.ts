import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IToken, IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: EventEmitter<IUser> = new EventEmitter();

  isLogged$: EventEmitter<boolean> = new EventEmitter();

  token!: string;

  url = 'http://localhost:3004/users/login';

  constructor(private http: HttpClient, public userService: UserService) {}

  public logIn(user: IUser) {
    this.http.post<IToken>(this.url, user).subscribe((token) => localStorage.setItem('token', token.token));
    setTimeout(() => {
      this.userService.isLogged();
    }, 300);
  }

  public logOut() {
    localStorage.removeItem('token');
    this.userService.isLogged();
  }

  public isLogged() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged$.emit(true);
    } else {
      this.isLogged$.emit(false);
    }
  }

  public setUser(user: IUser) {
    this.user$.emit(user);
  }
}
