import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

const token = localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ItemOptionsService {
  constructor(private http: HttpClient, private userService: UserService) {}

  public addToCart(itemId: string) {
    const url = 'http://localhost:3004/users/cart';
    const body = { id: itemId };
    return this.http.post(url, body, httpOptions);
  }

  public deleteFromCart(itemId: string) {
    const url = `http://localhost:3004/users/cart?id=${itemId}`;
    return this.http.delete(url, httpOptions);
  }

  public addToFavorite(itemId: string) {
    const url = 'http://localhost:3004/users/favorites';
    const body = { id: itemId };
    return this.http.post(url, body, httpOptions);
  }

  public deleteFromFavorite(itemId: string) {
    const url = `http://localhost:3004/users/favorites?id=${itemId}`;
    return this.http.delete(url, httpOptions);
  }

  public updateUserInfo() {
    if (token) {
      this.userService.getUserInfo(token);
    } else {
      console.log('user is not registered');
    }
  }
}
