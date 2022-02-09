import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { UserForm } from '@core/models/auth.model'
import { environment } from '@env/environment'
import { Img } from '@core/models/img.model'
import { Response } from '@core/models/response.interface'
interface RegisterResponse extends Response {
  result: {
    token: string
    profile: Img
  }
}

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  register(user: UserForm): Observable<{
    token: string
    profile: Img
  }> {
    return this.http
      .post<RegisterResponse>(`${environment.apiUrl}/auth/register`, user)
      .pipe(map(({ result }) => result))
  }
}
