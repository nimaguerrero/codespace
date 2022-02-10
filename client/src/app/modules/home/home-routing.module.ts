import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ProjectComponent } from './pages/project/project.component'
import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProjectsComponent
      },
      {
        path: 'projects/:id',
        component: ProjectComponent
      },
      {
        path: 'projects/tag/:term',
        component: ProjectsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
