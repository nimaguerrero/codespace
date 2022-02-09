import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { environment } from '@env/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  updateProfile(data: any, file: File, public_id: string) {
    const fd = new FormData()
    this.destructureData(data, file, fd, public_id)
    return this.http
      .put<any>(`${environment.apiUrl}/clients/update`, fd)
      .pipe(map(({ ok, msg }) => msg))
  }

  getClient() {
    return this.http
      .get<any>(`${environment.apiUrl}/clients`)
      .pipe(map(({ ok, client }) => client))
  }

  private destructureData(
    data: any,
    file: File,
    fd: FormData,
    public_id?: string
  ) {
    const { name, email, country } = data
    fd.append('name', name)
    fd.append('email', email)
    fd.append('country', country)
    fd.append('file', file)
    if (public_id) fd.append('public_id', public_id)
  }
}
