import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { MyOrdersComponent } from './my-orders/my-orders.component'
import { MyCodespaceComponent } from './my-codespace/my-codespace.component'
import { ClientComponent } from './client.component'

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'my-codespace', component: MyCodespaceComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
