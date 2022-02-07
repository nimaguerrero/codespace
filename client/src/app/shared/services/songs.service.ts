import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor(private http: HttpClient) {}

  getSongs(term: any, page: number, limit: number, func = '', param = '') {
    return this.http
      .get<any>(
        `${environment.apiUrl}/songs/paginado?term=${term}&page=${page}&limit=${limit}&func=${func}&param=${param}`
      )
      .pipe(map(({ ok, songs }) => songs));
  }
}
