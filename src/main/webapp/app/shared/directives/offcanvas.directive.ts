/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable no-var */
// Angular
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

declare const KTOffcanvas: any;

export interface OffcanvasOptions {
  baseClass: string;
  overlay?: boolean;
  closeBy: string;
  toggleBy?: any;
}

/**
 * Setup off Convas
 */
@Directive({
  selector: '[jhiOffcanvas]',
  exportAs: 'jhiOffcanvas'
})
export class OffcanvasDirective implements AfterViewInit {
  @Input() options: OffcanvasOptions | undefined;

  private offcanvas: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.offcanvas = new KTOffcanvas(this.el.nativeElement, this.options);
    });
  }

  getOffcanvas() {
    return this.offcanvas;
  }
}
