/* eslint-disable no-param-reassign */
import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { getUser } from 'src/app/ngrx/selectors/user.selector';
import { IAppState } from 'src/app/ngrx/state.models';
import { IUserInfo } from 'src/app/shared/models/user-info.model';

@Directive({
  selector: '[appAddToFavorite]',
})
export class AddToFavoriteDirective implements OnInit {
  @Input()
  public id!: string;

  public favorite!: string[];

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private store: Store<IAppState>,
  ) { }

  ngOnInit() {
    this.store.select<IUserInfo[]>(getUser)
      .subscribe((user: IUserInfo[]) => {
        this.favorite = user[0].favorites;
        this.cartCheck(this.id);
      });
  }

  public cartCheck(id: string) {
    if (this.favorite.includes(id)) {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none');
    }
    if (!this.favorite.includes(id)) {
      this.renderer.setStyle(this.elRef.nativeElement, 'display', 'flex');
    }
  }
}
