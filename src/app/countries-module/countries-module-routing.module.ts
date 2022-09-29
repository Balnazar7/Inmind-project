import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from '../countries/countries.component';
import { CountryDetailComponent } from '../country-detail/country-detail.component';
import { AuthGuard } from '../guards/auth.guard';
import { CountriesModuleComponent } from './countries-module.component';

const routes: Routes = [
  { path: '', component: CountriesModuleComponent },
  { path: 'countries', component: CountriesComponent, canActivate: [AuthGuard]},
  { path: 'country-detail/:name', component: CountryDetailComponent, canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesModuleRoutingModule { }
