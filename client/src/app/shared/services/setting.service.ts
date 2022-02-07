import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class SettingService {
  constructor(private http: HttpClient) {}
  getBlackLogo() {
    return this.http
      .get<any>(`${environment.apiUrl}/settings/black-logo`)
      .pipe(map(({ ok, logo }) => logo));
  }

  getIgv() {
    return this.http
      .get<any>(`${environment.apiUrl}/settings/igv`)
      .pipe(map(({ ok, igv }) => igv));
  }
}
