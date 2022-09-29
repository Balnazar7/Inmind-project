import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { AuthenticationCountriesModuleComponent } from './authentication-countries-module.component';

const routes: Routes = [
  { path: '', component: AuthenticationCountriesModuleComponent },
  { path: 'register', component: RegisterFormComponent},
  { path: 'login', component: LoginFormComponent,},
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationCountriesModuleRoutingModule { }
