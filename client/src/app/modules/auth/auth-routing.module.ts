import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SendEmailChangePasswordComponent } from './pages/send-email-change-password/send-email-change-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'change-password/:code',
    component: ChangePasswordComponent,
  },
  {
    path: 'verify',
    component: SendEmailChangePasswordComponent,
  },
  { path: '', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
