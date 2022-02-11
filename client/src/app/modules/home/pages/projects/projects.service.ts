import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '@env/environment'
import { ProjectsPagination } from '@core/models/project.model'
import { Project } from '@core/models/project.model'
import { Response } from '@core/models/response.interface'

interface GetProjectsResponse extends Response {
  result: { projects: ProjectsPagination }
}

interface FilterProjectsResponse extends Response {
  result: { projects: Project[] }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(term: any, page: number, limit: number) {
    return this.http
      .get<GetProjectsResponse>(
        `${environment.apiUrl}/projects/paginado?term=${term}&page=${page}&limit=${limit}`
      )
      .pipe(map(({ result }) => result.projects))
  }

  filterProjects(projects: Project[], filtro: string, value: string) {
    return this.http
      .post<FilterProjectsResponse>(
        `${environment.apiUrl}/projects/filters?filtro=${filtro}&value=${value}`,
        { projects }
      )
      .pipe(map(({ result }) => result.projects))
  }
}
