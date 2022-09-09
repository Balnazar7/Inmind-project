import { Component } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countries: any;

  constructor(private service: CountryService){}

  ngOnInit(){
    this.service.getCountries()
      .subscribe(response => {
        this.countries = response;
      })
  }
}
