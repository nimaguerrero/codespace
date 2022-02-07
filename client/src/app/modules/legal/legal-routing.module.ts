import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { DmcaPolicyComponent } from './dmca-policy/dmca-policy.component';
import { LegalInformationComponent } from './legal-information/legal-information.component';

const routes: Routes = [
  {
    path: 'legal-information',
    component: LegalInformationComponent,
  },
  {
    path: 'dmca-policy',
    component: DmcaPolicyComponent,
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalRoutingModule {}
