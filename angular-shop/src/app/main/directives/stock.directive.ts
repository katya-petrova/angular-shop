/* eslint-disable no-param-reassign */
import {
  Directive, ElementRef, Input, OnChanges, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStock]',
})
export class StockDirective implements OnChanges {
  @Input()
  public stockAmount!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    elRef.nativeElement.style.backgroundColor = '#719e00';
  }

  ngOnChanges(): void {
    if (+this.stockAmount < 5) {
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'red');
    }
    if (+this.stockAmount > 5 && +this.stockAmount < 10) {
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'orange');
    }
    if (+this.stockAmount > 10) {
      this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', '#719e00');
    }
  }
}
