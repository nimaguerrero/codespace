import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { ChangePasswordService } from './change-password.service';
import { FormConditionsService } from '@shared/services/form-conditions.service';
import { AlertService } from '@shared/services/alerts.service';
import { ValidatorsService } from '@shared/services/validators.service';

@Component({
  selector: 'Change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  cpForm!: FormGroup;
  routeRedirect = '';
  subs = new Subscription();
  code = '';

  isText = false;
  isTextRe = false;

  @ViewChild('showPass') showPass!: ElementRef;
  @ViewChild('showrePass') showrePass!: ElementRef;

  fc!: FormConditionsService;

  constructor(
    private render: Renderer2,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private changePass: ChangePasswordService,
    private alertServ: AlertService,
    private valServ: ValidatorsService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.verify();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  initForm() {
    this.cpForm = this.fb.group(
      {
        passwordcpForm: ['', Validators.required],
        repasswordcpForm: ['', Validators.required],
      },
      {
        validators: this.valServ.equalPasswords(
          'passwordcpForm',
          'repasswordcpForm'
        ),
      }
    );
    this.fc = new FormConditionsService(this.cpForm);
  }

  verify() {
    this.route.params.subscribe(({ code }) => {
      this.code = code;
      this.changePass.isCodeExpired(code).subscribe((expiro: boolean) => {
        if (expiro) this.alertServ.error('Su código expiró', '/auth/login');
      });
    });
  }

  submitForm(form: FormGroup) {
    if (form.invalid)
      return this.fc.invalidForm(['passwordcpForm', 'repasswordcpForm']);

    const p1 = this.fc.control('passwordcpForm');
    const p2 = this.fc.control('repasswordcpForm');
    const data = {
      password: p1,
      code: this.code,
    };

    this.changePass
      .updatePassword(data)
      .subscribe(({ ok, msg }) => this.alertServ.success(msg, '/auth/login'));
  }

  showPassword() {
    const x = this.showPass.nativeElement;
    x.type === 'password'
      ? this.render.setAttribute(this.showPass.nativeElement, 'type', 'text')
      : this.render.setAttribute(
          this.showPass.nativeElement,
          'type',
          'password'
        );
  }

  showRePassword() {
    const x = this.showrePass.nativeElement;
    x.type === 'password'
      ? this.render.setAttribute(this.showrePass.nativeElement, 'type', 'text')
      : this.render.setAttribute(
          this.showrePass.nativeElement,
          'type',
          'password'
        );
  }
}
