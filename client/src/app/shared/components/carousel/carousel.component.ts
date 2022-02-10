import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { Project } from '@app/core/models/project.model'
import { ProjectsService } from '../../services/projects.service'

@Component({
  selector: 'Carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  projects$!: Observable<Project[]>
  @Input('term') term!: string
  subs = new Subscription()

  constructor(private projectsServ: ProjectsService) {}

  ngOnInit(): void {
    this.relatedProjects()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  relatedProjects() {
    this.projects$ = this.projectsServ
      .getProjects(this.term, 1, 5)
      .pipe(map(({ projects }) => projects))
    this.subs.add(this.projects$.subscribe())
  }
}
