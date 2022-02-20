import { Component, Input } from '@angular/core'

@Component({
  selector: 'DownloadIcon',
  templateUrl: './download.component.svg'
})
export class DownloadIcon {
  @Input('fill') fill: string = '#fff'
  constructor() {}
}
