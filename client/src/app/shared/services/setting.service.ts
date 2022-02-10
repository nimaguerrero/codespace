import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '@env/environment'
import { Response } from '@core/models/response.interface'
import { Img } from '@core/models/img.model'

interface LogoResponse extends Response {
  result: {
    logo: Img
  }
}
interface IgvResponse extends Response {
  result: {
    igv: number
  }
}
@Injectable({
  providedIn: 'root'
})
export class SettingService {
  constructor(private http: HttpClient) {}
  getLogo() {
    return this.http
      .get<LogoResponse>(`${environment.apiUrl}/settings/logo`)
      .pipe(map(({ result }) => result.logo))
  }

  getIgv() {
    return this.http
      .get<IgvResponse>(`${environment.apiUrl}/settings/igv`)
      .pipe(map(({ result }) => result.igv))
  }
}
