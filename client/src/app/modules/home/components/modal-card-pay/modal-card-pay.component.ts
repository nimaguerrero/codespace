import { Subscription } from 'rxjs'
import { OnDestroy } from '@angular/core'
import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { detailsItf } from './models/sale.interface'
import { SaleClass } from './models/sale.class'
import { PaypalService } from './paypal.service'
import { Project } from '@core/models/project.model'
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
  project!: Project
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
    this.project = this.modalServ.projectModal
  }

  closeModal() {
    this.close.emit(true)
  }

  createOrder() {
    // this.subs.add(
    //   this.paypal.createOrder(this.tag.id).subscribe((link) => {
    //     location.href = link
    //   })
    // )
  }
}
