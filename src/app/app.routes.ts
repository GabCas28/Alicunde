import { Routes } from '@angular/router';
import { SuccessComponent } from './views/success/success.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'success', component: SuccessComponent },
  { path: 'login', component: LoginComponent },
];
