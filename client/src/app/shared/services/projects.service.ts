import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '@env/environment'
import { Project } from '@core/models/project.model'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(term: any, page: number, limit: number, filter = '', value = '') {
    return this.http
      .get<{ ok: boolean; result: { projects: Project[] } }>(
        `${environment.apiUrl}/projects/paginado?term=${term}&page=${page}&limit=${limit}&filter=${filter}&value=${value}`
      )
      .pipe(map(({ ok, result }) => result.projects))
  }
}
