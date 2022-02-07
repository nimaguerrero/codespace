import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApi, UserForm } from '@core/models/auth.model';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  register(user: UserForm): Observable<UserApi> {
    return this.http.post<UserApi>(`${environment.apiUrl}/auth/register`, user);
  }
}
