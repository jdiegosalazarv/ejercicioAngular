import { Injectable } from "@angular/core";
import { BirdGateway } from '../models/bird/gateway/bird.gateway';
import { IBirdRequest } from '../../infrastructure/diven-adapter/bird/bird.model';
import { Observable, of } from 'rxjs';
import { IBirdModel } from "../models/bird/bird.model";
import { catchError } from 'rxjs/operators';

@Injectable()
export class BirdUseCase{
  
  constructor(private birdGateway:BirdGateway){

  }

  saveBird(params: IBirdRequest):Observable<IBirdModel | null>{
    return this.birdGateway.saveBird(params).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  updateBird(params: IBirdRequest): Observable<IBirdModel | null>{
    return this.birdGateway.saveBird(params).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  findBirdById(id: number): Observable<IBirdModel | null>{
    return this.birdGateway.findBirdById(id).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  findBirds(): Observable<Array<IBirdModel> | null>{
    return this.birdGateway.findBirds().pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  deleteBird(id: number): Observable<boolean | null>{
    return this.birdGateway.deleteBird(id).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }
}
