import {
  Component,
  OnDestroy,
  OnInit,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'
import { SettingService } from '@shared/services/setting.service'
import { ActivatedRoute, Router } from '@angular/router'
import { SeoService } from '@shared/services/seo.service'
import { isPlatformBrowser } from '@angular/common'
import { Project } from '@app/core/models/project.model'
import { ProjectsService } from '@app/modules/home/pages/projects/projects.service'
import { Tag, Language } from '../../../../core/models/setting.interface'
import { OTHERFILTERS } from '@app/global/constants'

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  orderBy = OTHERFILTERS.orderBy
  authors = OTHERFILTERS.authors

  loading = true
  viewDescription = false
  logo = ''
  alt = ''

  linkSel: boolean[] = new Array(10)
  term = ''
  page = 1
  filtro = ''
  value = ''
  pagination = {
    pages: [1],
    longitud: 1,
    previous: 0,
    next: 2,
    limit: 1
  }

  ntags = 0
  tags$!: Observable<Tag[]>
  nlanguages = 0
  languages$!: Observable<Language[]>
  projects: Project[] = []
  projects$!: Observable<Project[]>
  subs = new Subscription()
  pagesEl: ElementRef[] = []

  limit = 9
  notPrevPage = false
  notNextPage = false

  constructor(
    private route: ActivatedRoute,
    private projectsServ: ProjectsService,
    private settingServ: SettingService,
    private seo: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.linkSel.fill(false)
  }

  ngOnInit(): void {
    this.getProjects('', 1)
    this.getTags()
    this.getLanguages()
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  getTags() {
    this.tags$ = this.settingServ.getTags().pipe(
      map((tags) => {
        this.ntags = tags.length
        return tags
      })
    )
  }

  getLanguages() {
    this.languages$ = this.settingServ.getLanguages().pipe(
      map((languages) => {
        this.nlanguages = languages.length
        return languages
      })
    )
  }

  updownCard() {
    this.viewDescription = !this.viewDescription
  }

  linkSelected(n: number) {
    this.linkSel.fill(false)
    this.linkSel[n] = true
  }

  getProjects(term: any, page: number) {
    this.term = term
    this.page = page
    this.projects$ = this.projectsServ.getProjects(term, page, this.limit).pipe(
      map(({ projects, ...data }) => {
        this.loading = false
        this.pagination = { ...data, limit: this.limit }
        this.projects = projects
        return projects
      })
    )
  }

  filterProjects(filtro: string, value: string, link: number) {
    this.filtro = filtro
    this.value = value
    this.linkSelected(link)
    this.projects$ = this.projectsServ
      .filterProjects(this.projects, filtro, value)
      .pipe(
        map((projects) => {
          this.loading = false
          return projects
        })
      )
  }

  search() {
    if (isPlatformBrowser(this.platformId)) {
      let term: any = document.querySelector('#term')
      term.addEventListener('input', (e: any) => {
        const t = e.currentTarget.value
        if (t.length > 2 || t.length == 0) return this.getProjects(t, 1)
      })
    }
  }

  // TODO: CAMBIAR ESTO A FUTURO PARA QUE SE DE UNA SOLA VEZ TIENE QUE VER CON CACHE
  // getLogo(term: string) {
  //   return this.settingServ.getLogo().pipe(
  //     map(({ url }) => {
  //       this.logo = url
  //       term.length > 0
  //         ? this.seo.generateTags({
  //             title: this.seo.transformTitle(term),
  //             description: `Codespace - ${term}, ${term} que puedas encontrar proyectos,componentes o apis que te ayuden a facilitar tu trabajo`,
  //             slug: `projects/tag/${term}`,
  //             image: url
  //           })
  //         : this.seo.generateTags(this.seo.codespace.projects, url)
  //       return url
  //     })
  //   )
  // }
}
