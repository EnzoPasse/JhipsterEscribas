/* eslint-disable no-empty */
// Angular
import { Injectable } from '@angular/core';
// RxJS
import { LayoutConfig } from './layout.config';
// Object-Path
// Lodash
// Models

@Injectable()
export class LayoutConfigService {
  constructor() {}

  saveConfig(layoutConfig: LayoutConfig): void {
    if (layoutConfig) {
      localStorage.setItem('layoutConfig', JSON.stringify(layoutConfig));
    }
  }

  getConfig(): LayoutConfig {
    const config = localStorage.getItem('layoutConfig');
    if (config) {
      return JSON.parse(config);
    } else {
      const newConfig = new LayoutConfig().configs;
      this.saveConfig(newConfig);
      return newConfig;
    }
  }

  removeConfig(): void {
    localStorage.removeItem('layoutConfig');
  }
}
