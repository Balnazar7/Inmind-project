import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationCountriesModuleRoutingModule } from './authentication-countries-module-routing.module';
import { AuthenticationCountriesModuleComponent } from './authentication-countries-module.component';


@NgModule({
  declarations: [
    AuthenticationCountriesModuleComponent
  ],
  imports: [
    CommonModule,
    AuthenticationCountriesModuleRoutingModule
  ]
})
export class AuthenticationCountriesModuleModule { }
