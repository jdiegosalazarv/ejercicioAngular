import { Injectable } from '@angular/core';
import { ZoneGateway } from '../models/zone/gateway/zone.gateway';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { IZoneRequest } from 'src/app/infrastructure/diven-adapter/zone/zone.model';
import { IZoneModel } from '../models/zone/zone.mode';

@Injectable()
export class ZoneUseCase{

  constructor(private zoneGateway:ZoneGateway){

  }

  saveZone(params: IZoneRequest): Observable<IZoneModel | null>{
    return this.zoneGateway.saveZone(params).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  updateZone(params: IZoneRequest): Observable<IZoneModel | null>{
    return this.zoneGateway.updateZone(params).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  findZoneById(id: number): Observable<IZoneModel | null>{
    return this.zoneGateway.findZoneById(id).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  findZones(): Observable<Array<IZoneModel> | null>{
    return this.zoneGateway.findZones().pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }

  deleteZone(id: number): Observable<boolean | null>{
    return this.zoneGateway.deleteZone(id).pipe(
      catchError(()=>{
        return of(null);
      })
    )
  }
}
