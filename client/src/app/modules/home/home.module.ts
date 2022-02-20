import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { ProjectComponent } from './pages/project/project.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { SharedModule } from '@shared/shared.module'
import { ModalCardPayComponent } from './components/modal-card-pay/modal-card-pay.component'
import { HomeComponent } from './home.component'
import { IconsModule } from '@app/icons/icons.module'
import { NgxStarsModule } from 'ngx-stars'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectsComponent,
    // COMPONENTS
    ModalCardPayComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IconsModule,
    NgxStarsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    ProjectComponent,
    ProjectsComponent,
    // COMPONENTS
    ModalCardPayComponent
  ]
})
export class HomeModule {}
