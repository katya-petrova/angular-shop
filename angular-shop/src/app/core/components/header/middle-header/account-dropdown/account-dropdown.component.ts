/* eslint-disable no-return-assign */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthPopupComponent } from '../../../auth-popup/auth-popup.component';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.scss'],
})
export class AccountDropdownComponent implements OnInit, OnDestroy {
  public userName: string | null | undefined;

  public isLogged!: boolean;

  userInfoSubscription!: Subscription;

  isLoggedSubscription!: Subscription;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    // this.userService.isLogged();
    this.userInfoSubscription = this.userService
      .userInfo$.subscribe((info) => this.userName = info?.firstName);
    this.isLoggedSubscription = this.userService.isLogged$.subscribe((data) => {
      this.isLogged = data;
      console.log(this.isLogged);
    });
  }

  openDialog():void {
    this.dialog.open(AuthPopupComponent);
  }

  logOut(): void {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.userInfoSubscription.unsubscribe();
    this.isLoggedSubscription.unsubscribe();
  }
}
