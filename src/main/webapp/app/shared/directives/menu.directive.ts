/* eslint-disable @typescript-eslint/tslint/config */
// Angular
import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
// Object-Path
import * as objectPath from 'object-path';

declare const KTMenu: any;

export interface MenuOptions {
  scroll?: any;
  submenu?: any;
  accordion?: any;
}

/**
 * Configure menu
 */
@Directive({
  selector: '[jhiMenu]',
  exportAs: 'jhiMenu'
})
export class MenuDirective implements AfterViewInit {
  // Public propeties
  @Input() options: MenuOptions | undefined;
  // Private properites
  private menu: any;

  /**
   * Directive Constructor
   * @param el: ElementRef
   */
  constructor(private el: ElementRef) {}

  /**
   * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
   */

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    this.setupOptions();
    this.menu = new KTMenu(this.el.nativeElement, this.options);
  }

  /**
   * Return the menu
   */
  getMenu() {
    return this.menu;
  }

  /**
   * Setup menu options
   */
  private setupOptions() {
    // init aside menu
    let menuDesktopMode = 'accordion';
    if (this.el.nativeElement.getAttribute('data-ktmenu-dropdown') === '1') {
      menuDesktopMode = 'dropdown';
    }

    if (this.options) {
      if (typeof objectPath.get(this.options, 'submenu.desktop') === 'object') {
        objectPath.set(this.options, 'submenu.desktop.default', menuDesktopMode);
      }
    }
  }
}
