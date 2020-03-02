/* eslint-disable @typescript-eslint/tslint/config */
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { BrandComponent } from './brand/brand.component';
import { ErrorComponent } from './error/error.component';
import { PageRibbonComponent } from './profiles/page-ribbon.component';
import { ActiveMenuDirective } from './navbar/active-menu.directive';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { JhipsterEscribasSharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // NgxPermissionsModule.forChild(),
    JhipsterEscribasSharedModule,
    RouterModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    SideBarComponent,
    BrandComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    ScrollTopComponent,
    ActiveMenuDirective
  ],
  exports: [
    MainComponent,
    NavbarComponent,
    SideBarComponent,
    BrandComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    ScrollTopComponent,
    ActiveMenuDirective
  ]
})
export class JhipsterEscribasLayout {}
