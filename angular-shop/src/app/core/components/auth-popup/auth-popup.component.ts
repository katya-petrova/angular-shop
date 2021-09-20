import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss'],
})
export class AuthPopupComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submitForm(value:IUser) {
    this.authService.logIn(value);
  }
}
