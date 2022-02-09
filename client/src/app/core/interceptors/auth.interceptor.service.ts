import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import Swal from 'sweetalert2'
import { AuthService } from '@auth/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string = this.auth.getToken()
    let request = req
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(request).pipe(catchError(this.controlErrors))
  }

  controlErrors(error: HttpErrorResponse) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.error.msg
    })
    return throwError(() => error)
  }
}
