import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  
  countries: any[] = [];
  regions: any[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
   this.getCountries();
   setTimeout(() => this.getRegions(),500);
  }

  getCountries():void {
    this.countryService.getCountries().subscribe((res)=> {
      this.countries = res;
    })
  }

  getRegions(){
    this.regions = [...new Set(this.countries.map(e=> e.region))];
  }
}
