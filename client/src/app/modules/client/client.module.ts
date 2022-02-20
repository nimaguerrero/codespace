import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ClientRoutingModule } from './client-routing.module'
import { ProfileComponent } from './profile/profile.component'
import { MyOrdersComponent } from './my-orders/my-orders.component'
import { SharedModule } from '@shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { MyCodespaceComponent } from './my-codespace/my-codespace.component'
import { ClientComponent } from './client.component'

@NgModule({
  declarations: [
    ClientComponent,
    ProfileComponent,
    MyOrdersComponent,
    MyCodespaceComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientComponent,
    ProfileComponent,
    MyOrdersComponent,
    MyCodespaceComponent
  ]
})
export class ClientModule {}
