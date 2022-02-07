import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '@auth/services/auth.service';
import { UserToken } from '../../core/models/client.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user!: UserToken;
  public expirationDate!: Date | null;

  constructor(private auth: AuthService, private http: HttpClient) {
    this.getTokenInformation();
  }

  private getTokenInformation(): {
    user: UserToken;
    expirationDate: Date | null;
  } {
    const token = this.auth.getToken();
    const helper = new JwtHelperService();
    this.user = helper.decodeToken(token);
    this.expirationDate = helper.getTokenExpirationDate(token);
    return {
      user: this.user,
      expirationDate: this.expirationDate,
    };
  }

  isLogged(): boolean {
    return localStorage.getItem('islogged') === 'true' ?? false;
  }

  logout() {
    this.auth.logout();
  }

  getProfile(): Observable<string> {
    return this.http
      .get<any>(`${environment.apiUrl}/clients/profile`)
      .pipe(map(({ ok, url }) => url));
  }
}
