import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { format } from 'timeago.js'
import { TimeAgoService } from '../../services/timeago.service'
import { Project } from '@app/core/models/project.model'

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('project') project: any

  constructor(private router: Router, private TA: TimeAgoService) {}

  ngOnInit(): void {}

  goToSong(id: string) {
    this.router.navigate(['/projects/', id])
  }

  getUrl(project: Project) {
    if (project.cover) {
      return `linear-gradient(315deg, rgba(20, 22, 24, .8) 0%, rgba(20, 22, 24, .6) 74%), url(${project.cover.url})`
    } else {
      return `linear-gradient(315deg, rgba(20, 22, 24, .8) 0%, rgba(20, 22, 24, .6) 74%), url(${'https://res.cloudinary.com/gigga/image/upload/v1637945294/mrstems/youtube_spxhbp.gif'})`
    }
  }

  formatDate(date: any) {
    this.TA.timeagoCambioIdioma()
    return format(date, 'es_ES')
  }
}
