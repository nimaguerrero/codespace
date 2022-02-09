import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { ProjectService } from './project.service'
import { ModalService } from '@shared/services/modal.service'
import { Project } from '@app/core/models/project.model'
import { SeoService } from '@shared/services/seo.service'

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

  constructor(
    private route: ActivatedRoute,
    private projectServ: ProjectService,
    private modalServ: ModalService,
    private seo: SeoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) {
        this.getProject(id)
      }
    })
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
        map(({ project, tags }) => {
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