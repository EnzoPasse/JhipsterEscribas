/* eslint-disable no-console */
// Angular
import { Component, OnInit } from '@angular/core';
import { LayoutConfigService } from 'app/shared/config/layout.config.service';

import * as objectPath from 'object-path';
import { ToggleOptions } from 'app/shared/directives/toggle.directive';
// Layout

@Component({
  selector: 'jhi-brand',
  templateUrl: './brand.component.html'
})
export class BrandComponent implements OnInit {
  // Public properties
  // Public properties
  headerLogo!: string;

  toggleOptions: ToggleOptions = {
    target: 'body',
    targetState: 'kt-aside--minimize',
    togglerState: 'kt-aside__brand-aside-toggler--active'
  };

  constructor(private layoutConfigService: LayoutConfigService) {}

  ngOnInit(): void {
    const config = this.layoutConfigService.getConfig();
    this.headerLogo = objectPath.get(config, 'self.logo.brand');
  }
}
