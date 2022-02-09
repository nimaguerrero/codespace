import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '@env/environment'
// TODO: FALTA SU INTERFACE DE SendEmailResponse
@Injectable({
  providedIn: 'root'
})
export class SendEmailChangePasswordService {
  constructor(private http: HttpClient) {}
  sendEmail(email: any) {
    return this.http.post<any>(
      `${environment.apiUrl}/change-password/email`,
      email
    )
  }
}
