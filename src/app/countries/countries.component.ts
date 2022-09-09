import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  
  countries: any[] = []
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
   this.getCountries();
  }

  getCountries():void {
    this.countryService.getCountries().subscribe((res)=> {
      this.countries = res;
    })
  }

}
