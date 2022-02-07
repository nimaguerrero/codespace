import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(private http: HttpClient) {}

  getSong(id: string) {
    return this.http
      .get<any>(`${environment.apiUrl}/songs/${id}`)
      .pipe(map(({ ok, song }) => song));
  }
}
