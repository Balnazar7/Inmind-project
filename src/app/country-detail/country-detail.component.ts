import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { Location } from '@angular/common';
import { CountriesModel } from '../CountriesModel';
import { HttpClient } from '@angular/common/http';


export interface Image {
  image: string,
  thumbImage: string,
  alt: string,
  title: string
}

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})


export class CountryDetailComponent implements OnInit {

  country!: CountriesModel;
  imageObject: Image[] = [];
  isEditClicked: Boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getCountry();
  }

  getCountry(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let code = params.get('name');
      this.countryService.getCountry(code).subscribe((res) => {
        this.country = res[0];
        var borderArray = res[0].borders;
        
        borderArray.forEach((element: string) => {
          this.countryService.getBorderCountries(element).subscribe((data) => {
            console.log(data[0])
          this.imageObject.push(
            {
              image: data[0].flags.png,
              thumbImage: data[0].flags.png,
              alt: data[0].name.common,
              title: data[0].name.common,
            } 
            );
          }
          )
          });
        });
      });
  }

  imageClick(e: number) {
    this.router.navigate(['/country-detail/'+ this.imageObject[e].title]);
    this.imageObject = []


  }

  goBack(): void{
    this.location.back();
    this.imageObject = []
    // We need to reload when coming back from a border country to the previous, but no reload when coming back from country to all countries
  }

  editClicked() {
    this.isEditClicked = true;
  }

  saveClick() {
    this.isEditClicked = false;
  }



  
}
