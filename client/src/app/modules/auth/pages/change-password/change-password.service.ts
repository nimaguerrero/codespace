import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  constructor(private http: HttpClient) {}

  isCodeExpired(code: string): Observable<boolean> {
    return this.http
      .get<any>(`${environment.apiUrl}/change-password/${code}`)
      .pipe(map(({ ok, exp }) => (exp <= moment().unix() ? true : false)));
    // no se si se puede ?? false
    // const tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
  }

  updatePassword(data: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/change-password/update-password`,
      data
    );
  }
}
