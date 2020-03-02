import { NgModule } from '@angular/core';
import { JhipsterEscribasSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { LoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { ToggleDirective } from './directives/toggle.directive';
import { OffcanvasDirective } from './directives/offcanvas.directive';
import { ContentAnimateDirective } from './directives/content-animate.directive';
import { MenuDirective } from './directives/menu.directive';

// agregados por mi
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ScrollTopDirective } from './directives/scroll-top.directive';

@NgModule({
  imports: [JhipsterEscribasSharedLibsModule, PerfectScrollbarModule],
  declarations: [
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    ToggleDirective,
    OffcanvasDirective,
    ContentAnimateDirective,
    MenuDirective,
    ScrollTopDirective
  ],
  entryComponents: [LoginModalComponent],
  exports: [
    JhipsterEscribasSharedLibsModule,
    PerfectScrollbarModule,
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    LoginModalComponent,
    HasAnyAuthorityDirective,
    ToggleDirective,
    OffcanvasDirective,
    ContentAnimateDirective,
    MenuDirective,
    ScrollTopDirective
  ]
})
export class JhipsterEscribasSharedModule {}
