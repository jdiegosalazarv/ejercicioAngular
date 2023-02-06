import { Injectable } from '@angular/core';
import { CountryGateway } from '../models/country/gateway/country.gateway';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ICountryRequest } from 'src/app/infrastructure/diven-adapter/country/country.model';
import { ICountryModel } from '../models/country/country.model';
@Injectable()
export class CountryUseCase{

  constructor(private countryGateway :CountryGateway){

  }

  saveCountry(params: ICountryRequest): Observable<ICountryModel | null>{
    return this.countryGateway.saveCountry(params).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  updateCountry(params: ICountryRequest): Observable<ICountryModel | null>{
    return this.countryGateway.updateCountry(params).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  findCountryById(id: number): Observable<ICountryModel | null>{
    return this.countryGateway.findCountryById(id).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  findCountrys(): Observable<Array<ICountryModel> | null>{
    return this.countryGateway.findCountrys().pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  deleteCountry(id: number): Observable<boolean | null>{
    return this.countryGateway.deleteCountry(id).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }
}
