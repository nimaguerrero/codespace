import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class ModalReportService {
  constructor(private http: HttpClient) {}

  createReportLink(report: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/reports`, report)
      .pipe(map(({ ok, msg, report }) => msg));
  }
}
