import { Component, Input } from '@angular/core'

@Component({
  selector: 'WavyIcon',
  templateUrl: './wavy.component.svg'
})
export class WavyIcon {
  @Input('stroke') stroke: string = '#DBBA99'
  constructor() {}
}
