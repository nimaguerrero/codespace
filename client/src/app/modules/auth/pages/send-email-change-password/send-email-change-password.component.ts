import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { ValidatorsService } from '@shared/services/validators.service'
import { FormConditionsService } from '@shared/services/form-conditions.service'
import { SendEmailChangePasswordService } from './send-email-change-password.service'
import { AlertService } from '@shared/services/alerts.service'

@Component({
  selector: 'Send-email-change-password',
  templateUrl: './send-email-change-password.component.html',
  styleUrls: ['./send-email-change-password.component.scss']
})
export class SendEmailChangePasswordComponent implements OnInit {
  verifyForm!: FormGroup
  routeRedirect = ''
  subs = new Subscription()

  fc!: FormConditionsService

  constructor(
    private fb: FormBuilder,
    private sendEmail: SendEmailChangePasswordService,
    private val: ValidatorsService,
    private alertServ: AlertService
  ) {
    this.initForm()
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initForm() {
    this.verifyForm = this.fb.group({
      emailVerifyForm: [
        '',
        [Validators.required, Validators.pattern(this.val.onlyEmail)]
      ]
    })
    this.fc = new FormConditionsService(this.verifyForm)
  }

  submitForm(form: FormGroup) {
    if (form.invalid) return this.fc.invalidForm(['emailVerifyForm'])
    const email = {
      email: this.fc.control('emailVerifyForm')
    }
    this.subs.add(
      this.sendEmail
        .sendEmail(email)
        .subscribe(({ ok, msg }) => this.alertServ.success(msg, '/auth/login'))
    )
  }
}
