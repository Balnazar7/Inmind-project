import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { of, Subject, switchMap } from 'rxjs'
import { CountriesModel } from '../CountriesModel';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  
  private searchCountries = new Subject<string>();
  countries: CountriesModel[] = [];
  regions: any[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries():void {
    this.countryService.getCountries().subscribe((res) => {
      this.countries = res;
      this.regions = [...new Set(this.countries.map(e=> e.region))];
    })
  }
  

  // this.searchCountries
  // .pipe(
  //   switchMap((term: string) =>
  //   return of(this.countries.filter()))

  // )

  // Search(){

  // }
}
