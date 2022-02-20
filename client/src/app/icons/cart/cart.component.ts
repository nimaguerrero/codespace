import { Component, Input } from '@angular/core'

@Component({
  selector: 'CartIcon',
  templateUrl: './cart.component.svg'
})
export class CartIcon {
  @Input('fill') fill: string = '#fff'
  constructor() {}
}
