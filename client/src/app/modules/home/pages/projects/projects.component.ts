import {
  Component,
  OnDestroy,
  OnInit,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { switchMap, map, delay } from 'rxjs/operators'
import { SettingService } from '@shared/services/setting.service'
import { SongsService } from '@app/shared/services/projects.service'
import { ActivatedRoute, Router } from '@angular/router'
import { SeoService } from '@shared/services/seo.service'
import { isPlatformBrowser } from '@angular/common'
import { Project } from '@app/core/models/project.model'

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  loading = true
  viewDescription = false
  black_logo = ''
  alt = ''

  linkSel: boolean[] = [true, false]
  term = ''
  page = 1
  func = ''
  param = ''
  pagination = {
    pages: [1],
    longitud: 1,
    previous: 0,
    next: 2,
    limit: 1
  }

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
  ) {}

  ngOnInit(): void {
    // this.viewTagSong();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  viewTagSong() {
    this.subs.add(
      this.route.params
        .pipe(
          map(({ term }) => {
            term ? this.getProjects(term, 1) : this.getProjects('', 1)
            return term ?? ''
          }),
          switchMap((term: string) => this.getLogo(term))
        )
        .subscribe()
    )
  }

  updownCard() {
    this.viewDescription = !this.viewDescription
  }

  linkSelected(n: number) {
    this.linkSel.fill(false)
    this.linkSel[n] = true
  }

  getProjects(term: any, page: number, func = '', param = '', link = 0) {
    this.term = term
    this.page = page
    this.func = func
    this.param = param
    this.linkSelected(link)
    this.projects$ = this.projectsServ
      .getProjects(term, page, this.limit, this.func, this.param)
      .pipe(
        // delay(5000),
        map(({ songs, ...data }) => {
          this.loading = false
          this.pagination = { ...data, limit: this.limit }
          return songs
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
  getLogo(term: string) {
    return this.settingServ.getBlackLogo().pipe(
      map(({ url }) => {
        this.black_logo = url
        term.length > 0
          ? this.seo.generateTags({
              title: this.seo.transformTitle(term),
              description: `MrStems - ${term}, ${term} que puedas encontrar de las canciones que mas te gustan`,
              slug: `songs/tag/${term}`,
              image: url
            })
          : this.seo.generateTags(this.seo.mrstems.songs, url)
        return url
      })
    )
  }
}