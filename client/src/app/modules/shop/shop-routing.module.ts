import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'ticket/:transaction', component: TicketComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
