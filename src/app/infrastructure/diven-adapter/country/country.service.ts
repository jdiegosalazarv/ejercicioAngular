import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountryModel } from 'src/app/domain/models/country/country.model';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { ICountryRequest } from './country.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends CountryGateway{

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  API: string = 'http://localhost:8087/country'

  constructor(public http: HttpClient) {
    super();
   }

  saveCountry(params: ICountryRequest): Observable<ICountryModel> {
    return this.http.post<ICountryModel>(this.API, params, {
      headers: this.httpHeaders
    })
  }

  updateCountry(params: ICountryRequest): Observable<ICountryModel> {
    return this.http.put<ICountryModel>(this.API, params, {
      headers: this.httpHeaders
    })
  }

  findCountryById(id: number): Observable<ICountryModel> {
    return this.http.get<ICountryModel>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    })
  }

  findCountrys(): Observable<ICountryModel[]> {
    return this.http.get<Array<ICountryModel>>(this.API, {
      headers: this.httpHeaders
    })
  }

  deleteCountry(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    })
  }


}
