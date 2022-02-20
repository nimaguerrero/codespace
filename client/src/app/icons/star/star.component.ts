import { Component, Input } from '@angular/core'

@Component({
  selector: 'StarIcon',
  templateUrl: './star.component.svg'
})
export class StarIcon {
  @Input('fill') fill: string = '#fff'
  constructor() {}
}
