import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '@env/environment'
import { Report } from '@core/models/report.interface'
import { Response } from '@core/models/response.interface'

interface ReportResponse extends Response {
  result: {
    report: Report
  }
}

@Injectable({
  providedIn: 'root'
})
export class ModalReportService {
  constructor(private http: HttpClient) {}

  createReport(report: Report) {
    return this.http
      .post<ReportResponse>(`${environment.apiUrl}/reports`, report)
      .pipe(
        map(({ msg, result }) => {
          return { msg, report: result.report }
        })
      )
  }
}
