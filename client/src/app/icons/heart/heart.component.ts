import { Component, Input } from '@angular/core'

@Component({
  selector: 'HeartIcon',
  templateUrl: './heart.component.svg'
})
export class HeartIcon {
  @Input('fill') fill: string = '#fff'
  constructor() {}
}
