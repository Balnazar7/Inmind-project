import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesModuleRoutingModule } from './countries-module-routing.module';
import { CountriesModuleComponent } from './countries-module.component';


@NgModule({
  declarations: [
    CountriesModuleComponent
  ],
  imports: [
    CommonModule,
    CountriesModuleRoutingModule
  ]
})
export class CountriesModuleModule { }
