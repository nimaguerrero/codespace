import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PaypalService {
  constructor(private http: HttpClient) {}

  createOrder(tagId: string) {
    return this.http
      .get<any>(`${environment.apiUrl}/orders/create-order/${tagId}`)
      .pipe(map(({ ok, link }) => link));
  }
}
