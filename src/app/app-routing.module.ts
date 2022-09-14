import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryComponent } from './country/country.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ReturnToLoginGuard } from './guards/return-to-login.guard';

const routes: Routes = [
  { path: 'register', component: RegisterFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'countries', component: CountriesComponent, canActivate: [AuthGuard]},
  { path: 'navbar', component: NavbarComponent},
  { path: 'country', component: CountryComponent},
  { path: 'country-detail/:name', component: CountryDetailComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
