import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { LegalInformationComponent } from './legal-information/legal-information.component';
import { DmcaPolicyComponent } from './dmca-policy/dmca-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    LegalInformationComponent,
    DmcaPolicyComponent,
    TermsOfUseComponent,
  ],
  imports: [CommonModule, LegalRoutingModule, SharedModule],
  exports: [
    LegalInformationComponent,
    DmcaPolicyComponent,
    TermsOfUseComponent,
  ],
})
export class LegalModule {}
