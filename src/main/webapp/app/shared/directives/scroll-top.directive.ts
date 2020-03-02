// Angular
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

declare const KTScrolltop: any;

export interface ScrollTopOptions {
  offset: number;
  speed: number;
}

/**
 * Scroll to top
 */
@Directive({
  selector: '[jhiScrollTop]'
})
export class ScrollTopDirective implements AfterViewInit {
  @Input() options: ScrollTopOptions | undefined;
  private scrollTop: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.scrollTop = new KTScrolltop(this.el.nativeElement, this.options);
  }

  public getScrollTop(): void {
    return this.scrollTop;
  }
}
