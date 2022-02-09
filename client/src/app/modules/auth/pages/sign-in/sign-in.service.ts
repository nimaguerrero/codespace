import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { UserForm } from '@core/models/auth.model'
import { environment } from '@env/environment'
import { Response } from '@core/models/response.interface'
import { Img } from '@core/models/img.model'

interface LoginResponse extends Response {
  result: {
    token: string
    profile: Img
  }
}
@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private http: HttpClient) {}

  login(user: UserForm): Observable<{ token: string; profile: Img }> {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/auth/login`, user)
      .pipe(map(({ result }) => result))
  }
}
