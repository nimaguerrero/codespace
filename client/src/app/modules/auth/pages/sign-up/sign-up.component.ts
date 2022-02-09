import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core'
import { Location } from '@angular/common'
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { Subscription } from 'rxjs'
import { NavigationEnd, Router } from '@angular/router'
import { SignUpService } from './sign-up.service'
import { ValidatorsService } from '@shared/services/validators.service'

import { AuthService } from '../../services/auth.service'
import { environment } from '@env/environment'
import { FormConditionsService } from '@shared/services/form-conditions.service'

@Component({
  selector: 'Sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup
  routeRedirect = ''
  subs = new Subscription()
  isText = false
  isTextRe = false
  @ViewChild('showPassRegister') showPassRegister!: ElementRef
  @ViewChild('showrePassRegister') showrePassRegister!: ElementRef

  authimg = environment.authimg

  fc!: FormConditionsService

  constructor(
    private _location: Location,
    private fb: FormBuilder,
    private router: Router,
    private authServ: AuthService,
    private signUpServ: SignUpService,
    private render: Renderer2,
    private valServ: ValidatorsService
  ) {
    this.initForm()
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initForm() {
    this.registerForm = this.fb.group(
      {
        nameRegisterForm: [
          '',
          [Validators.required, Validators.pattern(this.valServ.onlyString)]
        ],
        emailRegisterForm: [
          '',
          [Validators.required, Validators.pattern(this.valServ.onlyEmail)]
        ],
        passRegisterForm: ['', [Validators.required, Validators.minLength(8)]],
        repassRegisterForm: ['', [Validators.required, Validators.minLength(8)]]
      },
      {
        validators: this.valServ.equalPasswords(
          'passRegisterForm',
          'repassRegisterForm'
        )
      }
    )
    this.fc = new FormConditionsService(this.registerForm)
  }

  submitForm(form: FormGroup) {
    if (form.invalid)
      return this.fc.invalidForm([
        'nameRegisterForm',
        'emailRegisterForm',
        'passRegisterForm'
      ])
    const user = {
      name: this.fc.control('nameRegisterForm'),
      email: this.fc.control('emailRegisterForm'),
      password: this.fc.control('passRegisterForm')
    }
    this.subs.add(
      this.signUpServ.register(user).subscribe(({ token }) => {
        this.authServ.saveToken(token)
        this.register()
      })
    )
  }

  showPassword() {
    const x = this.showPassRegister.nativeElement
    this.isText = !this.isText
    x.type === 'password'
      ? this.render.setAttribute(
          this.showPassRegister.nativeElement,
          'type',
          'text'
        )
      : this.render.setAttribute(
          this.showPassRegister.nativeElement,
          'type',
          'password'
        )
  }
  showRePassword() {
    const x = this.showrePassRegister.nativeElement
    this.isTextRe = !this.isTextRe
    x.type === 'password'
      ? this.render.setAttribute(
          this.showrePassRegister.nativeElement,
          'type',
          'text'
        )
      : this.render.setAttribute(
          this.showrePassRegister.nativeElement,
          'type',
          'password'
        )
  }

  register() {
    this.authServ.login()
    this.router.navigate(['/'])
  }
}
