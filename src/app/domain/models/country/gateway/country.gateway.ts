import { ICountryModel } from "../country.model";
import { Observable } from 'rxjs';
import { ICountryRequest } from "src/app/infrastructure/diven-adapter/country/country.model";


export abstract class CountryGateway{
  abstract saveCountry(params: ICountryRequest): Observable<ICountryModel>;

  abstract updateCountry(params: ICountryRequest): Observable<ICountryModel>;

  abstract findCountryById(id: number): Observable<ICountryModel>;

  abstract findCountrys(): Observable<Array<ICountryModel>>;

  abstract deleteCountry(id: number): Observable<boolean>;
}
