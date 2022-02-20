import { Component, Input } from '@angular/core'

@Component({
  selector: 'HeartLikeIcon',
  templateUrl: './heart-like.component.svg'
})
export class HeartLikeIcon {
  @Input('fill') fill: string = '#fff'
  constructor() {}
}
