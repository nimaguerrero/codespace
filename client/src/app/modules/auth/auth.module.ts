import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SendEmailChangePasswordComponent } from './pages/send-email-change-password/send-email-change-password.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ChangePasswordComponent,
    SendEmailChangePasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
  exports: [
    SignInComponent,
    SignUpComponent,
    ChangePasswordComponent,
    SendEmailChangePasswordComponent,
  ],
})
export class AuthModule {}
