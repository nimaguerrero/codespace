import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Response } from '@core/models/response.interface'
import { Img } from '@core/models/img.model'
import { Language, Tag } from '@core/models/setting.interface'
import { Observable } from 'rxjs'
import { ENDPOINT } from '@app/global/endpoints'

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
  getLogo(): Observable<Img> {
    return this.http
      .get<LogoResponse>(`${ENDPOINT().setting.logo}`)
      .pipe(map(({ result }) => result.logo))
  }
  // /igv
  getIgv(): Observable<number> {
    return this.http
      .get<IgvResponse>(`${ENDPOINT().setting.igv}`)
      .pipe(map(({ result }) => result.igv))
  }

  // /languages
  getLanguages(): Observable<Language[]> {
    return this.http
      .get<any>(`${ENDPOINT().setting.languages}`)
      .pipe(map(({ result }) => result.languages))
  }
  // /tags
  getTags(): Observable<Tag[]> {
    return this.http
      .get<any>(`${ENDPOINT().setting.tags}`)
      .pipe(map(({ result }) => result.tags))
  }
}
