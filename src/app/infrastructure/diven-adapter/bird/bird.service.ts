import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBirdModel } from 'src/app/domain/models/bird/bird.model';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';
import { IBirdRequest } from './bird.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BirdService extends BirdGateway{

  private httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  API:string = 'http://localhost:8087/bird';

  constructor(public http: HttpClient) {
    super();
   }

  saveBird(params: IBirdRequest): Observable<IBirdModel> {
    return this.http.post<IBirdModel>(this.API, params, {
      headers: this.httpHeaders
    });
  }

  updateBird(params: IBirdRequest): Observable<IBirdModel> {
    return this.http.put<IBirdModel>(this.API, params, {
      headers: this.httpHeaders
    })
  }

  findBirdById(id: number): Observable<IBirdModel> {
    return this.http.get<IBirdModel>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    })
  }

  findBirds(): Observable<IBirdModel[]> {
    return this.http.get<Array<IBirdModel>>(this.API, {
      headers: this.httpHeaders
    })
  }

  deleteBird(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    })
  }

}
