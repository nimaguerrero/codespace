import { Injectable } from '@angular/core';
import {
  Route,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.checkUserLogin();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.canActivate(next, state);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    return this.checkUserLogin();
  }

  checkUserLogin(): boolean {
    if (this.authServ.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
