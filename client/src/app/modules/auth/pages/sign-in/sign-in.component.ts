import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Inject,
  PLATFORM_ID
} from '@angular/core'
import { SignInService } from './sign-in.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { ValidatorsService } from '@shared/services/validators.service'
import { isPlatformBrowser } from '@angular/common'
import { AuthService } from '../../services/auth.service'
import { FormConditionsService } from '@shared/services/form-conditions.service'

import { environment } from '@env/environment'

@Component({
  selector: 'Sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup
  routeRedirect = ''
  subs = new Subscription()
  rememberbool = true
  isText = false

  authimg = environment.authimg
  fc!: FormConditionsService

  @ViewChild('showPassLogin') showPassLogin!: ElementRef

  constructor(
    private render: Renderer2,
    private fb: FormBuilder,
    private router: Router,
    private authServ: AuthService,
    private signInServ: SignInService,
    private valServ: ValidatorsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initForm()
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  initForm() {
    this.loginForm = this.fb.group({
      emailLoginForm: [
        '',
        [Validators.required, Validators.pattern(this.valServ.onlyEmail)]
      ],
      passLoginForm: ['', [Validators.required, Validators.minLength(8)]]
    })
    this.fc = new FormConditionsService(this.loginForm)
  }

  submitForm(form: FormGroup) {
    if (form.invalid)
      return this.fc.invalidForm(['emailLoginForm', 'passLoginForm'])
    const user = {
      email: this.fc.control('emailLoginForm'),
      password: this.fc.control('passLoginForm')
    }
    this.subs.add(
      this.signInServ.login(user).subscribe(({ token }) => {
        this.authServ.saveToken(token)
        this.login()
        if (this.rememberbool) this.rememberme(user.email)
      })
    )
  }

  rememberme(email: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('email', email)
    }
  }

  login() {
    this.authServ.login()
    this.router.navigate(['/'])
  }

  showPassword() {
    const x = this.showPassLogin.nativeElement
    this.isText = !this.isText
    x.type === 'password'
      ? this.render.setAttribute(
          this.showPassLogin.nativeElement,
          'type',
          'text'
        )
      : this.render.setAttribute(
          this.showPassLogin.nativeElement,
          'type',
          'password'
        )
  }
}
