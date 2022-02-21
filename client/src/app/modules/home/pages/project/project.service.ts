import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Response } from '@core/models/response.interface'
import { Project } from '@core/models/project.model'
import { Observable } from 'rxjs'
import { ENDPOINT } from '@global/endpoints'

interface resGetProject extends Response {
  result: {
    project: Project
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  getProject(id: string): Observable<Project> {
    return this.http
      .get<resGetProject>(`${ENDPOINT().project.id}/${id}`)
      .pipe(map(({ result }) => result.project))
  }
}
