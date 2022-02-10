import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { REPORT_PROBLEMS } from '@global/constants'
import { ModalReportService } from './modal-report.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'Modal-report',
  templateUrl: './modal-report.component.html',
  styleUrls: ['./modal-report.component.scss']
})
export class ModalReportComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>()
  modalReportForm!: FormGroup
  problems = REPORT_PROBLEMS

  constructor(
    private fb: FormBuilder,
    private mr: ModalReportService,
    private toastr: ToastrService
  ) {
    this.initForm()
  }

  ngOnInit(): void {}

  initForm() {
    this.modalReportForm = this.fb.group({
      projectId: ['', [Validators.required]],
      problem: ['', [Validators.required]],
      note: ['']
    })
  }

  submitForm(form: FormGroup) {
    if (form.invalid) {
      return Object.values(form.controls).forEach((control: any) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => {
            control.markAsTouched()
            this.reset()
          })
        } else {
          control.markAsTouched()
          this.reset()
        }
      })
    } else {
      const report = {
        projectId: form.controls['projectId'].value,
        problem: form.controls['problem'].value,
        note: form.controls['note'].value
      }
      this.mr.createReport(report).subscribe(({ msg, report }) => {
        this.close.emit(true)
        this.toastr.success(msg)
      })
    }
  }

  reset() {
    this.modalReportForm.reset({
      projectId: '',
      problem: '',
      note: ''
    })
  }

  closeModal() {
    this.close.emit(true)
  }
}
