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
  { path: 'authenticationCountriesModule', loadChildren: () => import('./authentication-countries-module/authentication-countries-module.module').then(m => m.AuthenticationCountriesModuleModule) },
  { path: 'countriesModule', loadChildren: () => import('./countries-module/countries-module.module').then(m => m.CountriesModuleModule) },
  { path: '**', redirectTo: '/authenticationCountriesModule/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
