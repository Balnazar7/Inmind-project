import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartupDescriptionComponent } from './startup-description/startup-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from './state/countries.reducer';
import { TranslocoRootModule } from './transloco-root.module';
import { IonicModule } from '@ionic/angular'
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CountryComponent } from './country/country.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountriesComponent } from './countries/countries.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxPermissionsModule } from 'ngx-permissions'

@NgModule({
  declarations: [
    AppComponent,
    StartupDescriptionComponent,
    RegisterFormComponent,
    LoginFormComponent,
    CountryComponent,
    CountryDetailComponent,
    CountriesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    StoreModule.forRoot({countries: countriesReducer}),
    TranslocoRootModule,
    IonicModule.forRoot(),
    NgImageSliderModule,
    StoreDevtoolsModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
