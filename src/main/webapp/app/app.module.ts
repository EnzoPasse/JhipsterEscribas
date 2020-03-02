/* eslint-disable @typescript-eslint/tslint/config */
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterEscribasSharedModule } from 'app/shared/shared.module';
import { JhipsterEscribasCoreModule } from 'app/core/core.module';
import { JhipsterEscribasAppRoutingModule } from './app-routing.module';
import { JhipsterEscribasHomeModule } from './home/home.module';
import { JhipsterEscribasEntityModule } from './entities/entity.module';
import { JhipsterEscribasLayout } from './layouts/layout.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
// Kt -needle-this shit
import { NgxPermissionsModule } from 'ngx-permissions';
import { OverlayModule } from '@angular/cdk/overlay';
import { InlineSVGModule } from 'ng-inline-svg';
import { LayoutConfigService } from './shared/config/layout.config.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

export function initializeLayoutConfig(appConfig: LayoutConfigService) {
  // initialize app by loading default demo layout config
  return () => {
    appConfig.getConfig();
  };
}

// tslint:disable-next-line:class-name
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelSpeed: 0.5,
  swipeEasing: true,
  minScrollbarLength: 40,
  maxScrollbarLength: 300
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JhipsterEscribasSharedModule,
    JhipsterEscribasCoreModule,
    JhipsterEscribasHomeModule,
    JhipsterEscribasLayout,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterEscribasEntityModule,
    JhipsterEscribasAppRoutingModule,
    NgxPermissionsModule.forRoot(),
    OverlayModule,
    InlineSVGModule.forRoot(),
    PerfectScrollbarModule
  ],
  providers: [
    // layout config initializer
    LayoutConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeLayoutConfig,
      deps: [LayoutConfigService],
      multi: true
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  declarations: [
    // MainComponent,
    // NavbarComponent,
    // SideBarComponent,
    // BrandComponent,
    // ErrorComponent,
    // PageRibbonComponent,
    // ActiveMenuDirective,
    // FooterComponent,
    // ScrollTopComponent
  ],
  bootstrap: [MainComponent]
})
export class JhipsterEscribasAppModule {}
