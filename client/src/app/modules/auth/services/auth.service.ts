import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly ISTOKEN = 'token';
  readonly ISLOGGEDKEY = 'islogged';
  // public urlUsuarioIntentaAcceder = '';

  private loginFirst = 'false';
  private tokenFirst = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  constructor(private router: Router) {}

  login() {
    this.loginFirst = 'true';
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    this.changeLoginStatusSubject.next(true);
  }

  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem(this.ISLOGGEDKEY);
    localStorage.removeItem(this.ISTOKEN);
    localStorage.removeItem('email');
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn(): boolean {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY) || this.loginFirst;
    return isLogged && isLogged === 'true' ? true : false;
  }

  saveToken(token: string) {
    this.tokenFirst = token;
    localStorage.setItem(this.ISTOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(this.ISTOKEN) ?? this.tokenFirst;
  }
}
