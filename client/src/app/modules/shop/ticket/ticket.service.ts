import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  getTicket(transaction: string): Observable<{ sale: any; details: any[] }> {
    return this.http
      .get<any>(`${environment.apiUrl}/orders/ticket/${transaction}`)
      .pipe(map(({ ok, ticket }) => ticket));
  }
}
