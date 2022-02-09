import { Subscription } from 'rxjs'
import { OnDestroy } from '@angular/core'
import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { detailsItf } from './models/sale.interface'
import { SaleClass } from './models/sale.class'
import { PaypalService } from './paypal.service'
import { Song } from '@app/core/models/project.model'
import { Tag } from '@core/models/tag.model'
import { SettingService } from '@shared/services/setting.service'
import { ModalService } from '@shared/services/modal.service'
import { UserService } from '@shared/services/user.service'

@Component({
  selector: 'Modal-card-pay',
  templateUrl: './modal-card-pay.component.html',
  styleUrls: ['./modal-card-pay.component.scss']
})
export class ModalCardPayComponent implements OnInit, OnDestroy {
  @Output() close = new EventEmitter<boolean>()
  routeRedirect = ''
  subs = new Subscription()

  finishOrder = false

  // Servicio
  song!: Song
  tag!: Tag
  private igv = 0.2

  details: detailsItf[] = []
  venta!: SaleClass

  constructor(
    private setting: SettingService,
    private modalServ: ModalService,
    private paypal: PaypalService,
    public uS: UserService
  ) {}

  ngOnInit(): void {
    this.init()
    this.subs.add(this.setting.getIgv().subscribe((igv) => (this.igv = igv)))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  init() {
    this.song = this.modalServ.songModal
    this.tag = this.modalServ.tagModal
  }

  closeModal() {
    this.close.emit(true)
  }

  createOrder() {
    this.subs.add(
      this.paypal.createOrder(this.tag.id).subscribe((link) => {
        location.href = link
      })
    )
  }
}
