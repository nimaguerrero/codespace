import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { OrdersPagination } from '@core/models/order.model'
import { Observable } from 'rxjs'
import { environment } from '@env/environment'
import { Response } from '@core/models/response.interface'
import { Order } from '@core/models/order.model'

interface OrdersResponse extends Response {
  result: {
    orders: OrdersPagination
  }
}

interface OrderResponse extends Response {
  result: {
    order: Order
  }
}

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {
  constructor(private http: HttpClient) {}

  getOrders(page: number, limit: number): Observable<OrdersPagination> {
    return this.http
      .get<OrdersResponse>(
        `${environment.apiUrl}/orders/paginado?page=${page}&limit=${limit}`
      )
      .pipe(map(({ result }) => result.orders))
  }

  getOrder(id: string): Observable<Order> {
    return this.http
      .get<OrderResponse>(`${environment.apiUrl}/orders/${id}`)
      .pipe(map(({ result }) => result.order))
  }
}
