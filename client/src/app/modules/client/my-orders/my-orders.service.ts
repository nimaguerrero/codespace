import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { OrdersPagination, OrdersResponse } from '@core/models/order.model';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MyOrdersService {
  constructor(private http: HttpClient) {}

  getOrders(page: number, limit: number): Observable<OrdersPagination> {
    return this.http
      .get<OrdersResponse>(
        `${environment.apiUrl}/orders/paginado?page=${page}&limit=${limit}`
      )
      .pipe(map(({ ok, orders }) => orders));
  }

  getOrder(id: string) {
    return this.http
      .get<any>(`${environment.apiUrl}/orders/${id}`)
      .pipe(map(({ ok, order }) => order));
  }
}
