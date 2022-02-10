import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { REPORT_PROBLEMS } from '@global/constants'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ModalReportService } from '../modal-report.service'
import { ToastrService } from 'ngx-toastr'
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'Modal-report-client',
  templateUrl: './modal-report-client.component.html',
  styleUrls: ['./modal-report-client.component.scss']
})
export class ModalReportClientComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>()
  modalReportForm!: FormGroup
  @Input() transaction = ''
  problems = REPORT_PROBLEMS

  constructor(
    private fb: FormBuilder,
    private mr: ModalReportService,
    private toastr: ToastrService,
    private user: UserService
  ) {
    this.initForm()
  }

  ngOnInit(): void {}

  initForm() {
    this.modalReportForm = this.fb.group({
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
        problem: form.controls['problem'].value,
        note: form.controls['note'].value,
        email: this.user.user.email,
        transaction: this.transaction
      }
      this.mr.createReport(report).subscribe(({ msg, report }) => {
        this.close.emit(true)
        this.toastr.success(msg)
      })
    }
  }

  reset() {
    this.modalReportForm.reset({
      problem: '',
      note: ''
    })
  }

  closeModal() {
    this.close.emit(true)
  }
}
