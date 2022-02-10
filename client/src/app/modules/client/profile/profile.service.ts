import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { environment } from '@env/environment'
import { Response } from '@core/models/response.interface'
import { Img } from '@core/models/img.model'
import { Observable } from 'rxjs'

interface Client_Form {
  name: string
  email: string
  country: string
  profile: Img
}

interface ClientResponse extends Response {
  result: {
    client: Client_Form
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  updateClient(
    data: any,
    file: File,
    public_id: string
  ): Observable<{ msg: string; client: Client_Form }> {
    const fd = new FormData()
    this.destructureData(data, file, fd, public_id)
    return this.http
      .put<ClientResponse>(`${environment.apiUrl}/clients/update`, fd)
      .pipe(
        map(({ msg, result }) => {
          return { msg, client: result.client }
        })
      )
  }

  getClient(): Observable<Client_Form> {
    return this.http
      .get<ClientResponse>(`${environment.apiUrl}/clients`)
      .pipe(map(({ result }) => result.client))
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
