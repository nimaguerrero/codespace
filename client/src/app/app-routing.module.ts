import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { NotpagefoundComponent } from '@modules/404/not-page-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'legal',
    loadChildren: () =>
      import('@legal/legal.module').then((m) => m.LegalModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('@shop/shop.module').then((m) => m.ShopModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('@client/client.module').then((m) => m.ClientModule),
    canLoad: [AuthGuard],
  },
  {
    path: '404',
    component: NotpagefoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
