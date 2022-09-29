import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CountriesModel } from './CountriesModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private url = environment.apiUrl;
  constructor(private httpclient: HttpClient) { }

  getCountry(name: any): Observable<any> {
    return this.httpclient.get<any>(`https://restcountries.com/v3.1/name/${name}`)
  }


  getBorderCountries(element: string): Observable<any>{
    return this.httpclient.get<any>(`https://restcountries.com/v3.1/alpha/${element}`)
  }

  getCountriesState(): Observable<Array<CountriesModel>> {
    return this.httpclient.get<CountriesModel[]>(this.url + '/all')
    .pipe(
        map((countries: any) => countries || [])
      )
  }
}
