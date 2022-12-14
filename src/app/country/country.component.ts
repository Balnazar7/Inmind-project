import { Component, Input, OnInit } from '@angular/core';
import { CountriesModel } from '../CountriesModel';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input()
  country!: CountriesModel;
  constructor() { }

  ngOnInit(): void {
  }

}
