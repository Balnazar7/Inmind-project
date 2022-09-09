import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryComponent } from './country/country.component';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = 'https://restcountries.com/v3.1/all';
  constructor(private httpclient: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.url);
  }

  getCountry(name: any): Observable<any> {
    return this.httpclient.get<any>(`https://restcountries.com/v3.1/name/${name}`)
  }

  getBorderCountries(code: any[]): any[]{
    console.log('code:' + code);
    const arrayOfBorders: any[] = []
    code.forEach(element => {
      console.log('element: ' + element);
      this.httpclient.get<any[]>(`https://restcountries.com/v3.1/alpha/${element}`).subscribe((resp) => {
        arrayOfBorders.push(resp);
      })
      
    }); 
    return arrayOfBorders;
  }
}
