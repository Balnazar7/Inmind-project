import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: any;
  borderCountries: any[] = [];
  borderCountriesArray: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCountry();
    setTimeout(() => this.getBorderCountries(),1000);
  }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name).subscribe((res) => {
      this.country = res;
      this.borderCountries = res[0].borders;
    });
  }

  goBack(): void{
    this.location.back();
  }

  getBorderCountries(): void {
    this.borderCountriesArray = this.countryService.getBorderCountries(this.borderCountries);
  }

  log(): void {
    this.borderCountriesArray.forEach(c => {

      console.log('border:' + c[0].name.common);
    })
  }
}
