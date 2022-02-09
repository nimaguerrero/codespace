import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core'
import { UserService } from '@shared/services/user.service'
import { MyOrdersService } from './my-orders.service'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { Order } from '@core/models/order.model'
import { Pagination } from '@core/models/pagination.model'
import { Router } from '@angular/router'

@Component({
  selector: 'My-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders$!: Observable<Order[]>
  subs = new Subscription()
  tag = ''
  transaction = ''
  openReport = false
  loading = true
  profileUrl = ''

  page = 1
  limit = 5
  notPrevPage = false
  notNextPage = false
  pagesEl: ElementRef[] = []
  pagination: Pagination = {
    pages: [1],
    longitud: 1,
    previous: 0,
    next: 2,
    limit: 1
  }

  timeUltimateOrder!: any

  constructor(
    public uS: UserService,
    private orderServ: MyOrdersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOrders(1)
    this.subs.add(
      this.uS.getProfile().subscribe((profileUrl) => {
        this.loading = false
        this.profileUrl = profileUrl
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  viewTicket(transaction: string) {
    this.router.navigate([`/shop/ticket/${transaction}`])
  }

  getOrders(page: number) {
    this.page = page
    this.orders$ = this.orderServ.getOrders(page, this.limit).pipe(
      map(({ orders, ...data }) => {
        this.pagination = { ...data, limit: this.limit }
        if (orders.length > 0)
          this.timeUltimateOrder =
            orders[this.pagination.longitud - 1].createdAt
        return orders.filter((order) => order.transaction.length > 0)
      })
    )
  }

  closeReportModal(close: boolean) {
    this.openReport = !close
  }

  report(tag: any, transaction: string) {
    this.openReport = !this.openReport
    this.transaction = transaction
    this.tag = tag
  }
}
