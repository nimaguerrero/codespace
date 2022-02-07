import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES-------------------------------------------------------------------------------------------------------------
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { UserOptionsComponent } from './components/user-options/user-options.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalReportComponent } from './components/modal-report/modal-report.component';
import { ModalReportClientComponent } from './components/modal-report/modal-report-client/modal-report-client.component';

// PIPES-------------------------------------------------------------------------------------------------------------------
import { ArtistasPipe } from './pipes/artistas.pipe';
import { CapitalizeArrPipe } from './pipes/capitalizeArr.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { GenerosPipe } from './pipes/generos.pipe';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { SanitizeStylePipe } from './pipes/sanitizeStyle.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    UserOptionsComponent,
    CardComponent,
    CarouselComponent,
    ModalReportComponent,
    ModalReportClientComponent,
    // PIPES------------------------------------------------
    ArtistasPipe,
    CapitalizeArrPipe,
    CapitalizePipe,
    GenerosPipe,
    SanitizePipe,
    SanitizeStylePipe,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    UserOptionsComponent,
    FooterComponent,
    LoadingComponent,
    CardComponent,
    CarouselComponent,
    ModalReportComponent,
    ModalReportClientComponent,
    // PIPES------------------------------------------------
    ArtistasPipe,
    CapitalizeArrPipe,
    CapitalizePipe,
    GenerosPipe,
    SanitizePipe,
    SanitizeStylePipe,
  ],
})
export class SharedModule {}