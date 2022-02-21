import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { ProjectsPagination } from '@core/models/project.model'
import { Project } from '@core/models/project.model'
import { Response } from '@core/models/response.interface'
import { ENDPOINT } from '@global/endpoints'

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
        `${
          ENDPOINT().projects.paginado
        }?term=${term}&page=${page}&limit=${limit}`
      )
      .pipe(map(({ result }) => result.projects))
  }
  filterProjects(projects: Project[], filtro: string, value: string) {
    return this.http
      .post<FilterProjectsResponse>(
        `${ENDPOINT().projects.filters}?filtro=${filtro}&value=${value}`,
        { projects }
      )
      .pipe(map(({ result }) => result.projects))
  }
}
