import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, MyOrdersComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [ProfileComponent, MyOrdersComponent],
})
export class ClientModule {}
