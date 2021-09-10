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

  public lastName: string | null | undefined;

  public isLogged: boolean | true | undefined;

  userInfoSubscription!: Subscription;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    public userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.isLogged();
    this.userInfoSubscription = this.userService
      .userInfo$.subscribe((info) => {
        this.userName = info?.firstName;
        this.lastName = info?.lastName;
        this.isUserLogged();
      });
  }

  isUserLogged() {
    if (this.userName) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  openDialog():void {
    this.dialog.open(AuthPopupComponent);
  }

  logOut(): void {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.userInfoSubscription.unsubscribe();
  }
}
