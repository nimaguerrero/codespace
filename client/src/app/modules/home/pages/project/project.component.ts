import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { ProjectService } from './project.service'
import { ModalService } from '@shared/services/modal.service'
import { Project } from '@app/core/models/project.model'
import { SeoService } from '@shared/services/seo.service'
import { COLORS } from '@global/constants'

@Component({
  selector: 'Project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.components.scss']
})
export class ProjectComponent implements OnInit {
  openMP = false
  openReport = false
  subs = new Subscription()
  project!: Project
  loading = true
  carouselTerm = ''
  colors = COLORS
  ratingDisplay: number = 0

  constructor(
    private route: ActivatedRoute,
    private projectServ: ProjectService,
    private modalServ: ModalService,
    private seo: SeoService
  ) {}

  onRatingSet(rating: any) {
    this.ratingDisplay = rating
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.getProject(id)
      }
    })
  }

  getUrl(url: string) {
    return `linear-gradient(180deg, rgba(238,238,238,1) 26%, rgba(40,45,49,0) 93%),
    url(${url})`
  }

  closePaypalModal(close: boolean) {
    this.openMP = !close
  }

  closeReportModal(close: boolean) {
    this.openReport = !close
  }

  openModalPaypal(project: Project) {
    this.openMP = !this.openMP
    this.modalServ.sendProjectToModal(project)
  }

  getProject(id: string) {
    this.projectServ
      .getProject(id)
      .pipe(
        map((project) => {
          this.project = project
          this.carouselTerm = project.name
          this.seo.generateTags({
            title: project.name,
            slug: `projects/${id}`,
            description: project.description,
            image: project.cover.url
          })
        })
      )
      .subscribe((resp) => (this.loading = false))
  }
}
