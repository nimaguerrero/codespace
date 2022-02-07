import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private router: Router) {}

  success(msg: string, route?: string) {
    Swal.fire({
      icon: 'success',
      title: 'ok',
      text: msg,
    });
    if (route) this.router.navigate([route]);
  }

  error(msg: string, route?: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: msg,
    });
    if (route) this.router.navigate([route]);
  }
}
