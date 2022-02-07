import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// CAMBIO DE IDIOMA A ESPAÑOL
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePy from '@angular/common/locales/es-PY';

// MODULOS EXTERNOS
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

// SERVICIOS
import { AuthInterceptorService } from './core/interceptors/auth.interceptor.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { NotpagefoundComponent } from '@modules/404/not-page-found.component';

registerLocaleData(localePy, 'es');

@NgModule({
  declarations: [AppComponent, NotpagefoundComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
