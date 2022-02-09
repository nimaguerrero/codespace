import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '@env/environment'
import { response } from '@core/models/response.interface'
import { Project } from '@core/models/project.model'

interface resGetProject extends response {
  result: {
    project: Project
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProject(id: string) {
    return this.http
      .get<resGetProject>(`${environment.apiUrl}/projects/${id}`)
      .pipe(map(({ result }) => result.project))
  }
}
