import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { StartupDescriptionComponent } from './startup-description/startup-description.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountryComponent } from './country/country.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { MatAutocompleteModule } from '@angular/material/autocomplete'


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    StartupDescriptionComponent,
    LoginFormComponent,
    CountriesComponent,
    CountryDetailComponent,
    NavbarComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    MatAutocompleteModule
  ],
  providers: [AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
