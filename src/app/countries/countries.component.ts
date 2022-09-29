import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { map } from 'rxjs'
import { Store } from '@ngrx/store';
import { retrievedCountriesList } from '../state/countries.actions';
import { selectCountries } from '../state/countries.selector';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  
  regionsFilter: string = '';
  searchValue: string = '';
  countries$ = this.store.select(selectCountries);
  regions: string[] = [];
  isLoaded: boolean = false;
  constructor(private countryService: CountryService, private store: Store) { }

  ngOnInit() {
    this.countryService
    .getCountriesState()
    .subscribe((countries) => {
      
      this.store.dispatch(retrievedCountriesList({countries}))
      this.isLoaded = true;
    }
    );
    
    this.countries$.subscribe((data) =>{
      this.regions = [...new Set(data.map(e => e.region))]
    })
  }

  Search(){
    if(this.regionsFilter === 'all' || this.regionsFilter === ''){
      this.countries$ = this.store.select(selectCountries)
      .pipe(
        map(countries => countries.filter(country => country.name.common.toLowerCase().includes(this.searchValue))))
    }
    else {
      this.countries$ = this.store.select(selectCountries)
      .pipe(
        map(countries => countries.filter(country => country.name.common.toLowerCase().includes(this.searchValue) && country.region.toLowerCase() === this.regionsFilter.toLowerCase())))
    }
  }

  regionChange() {
    if(this.regionsFilter === 'all'){
     this.countries$ =  this.store.select(selectCountries)
    }
    else{
      this.countries$ = this.store.select(selectCountries)
      .pipe(
        map(countries => countries.filter(country => country.region.toLowerCase() === this.regionsFilter.toLowerCase())))
    }
  }
}
