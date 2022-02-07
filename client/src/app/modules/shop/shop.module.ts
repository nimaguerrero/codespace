import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TicketComponent],
  imports: [CommonModule, ShopRoutingModule, SharedModule, ReactiveFormsModule],
  exports: [TicketComponent],
})
export class ShopModule {}
