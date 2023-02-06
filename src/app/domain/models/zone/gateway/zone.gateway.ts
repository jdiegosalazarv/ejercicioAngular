import { IZoneModel } from "../zone.mode";
import { Observable } from 'rxjs';
import { IZoneRequest } from "src/app/infrastructure/diven-adapter/zone/zone.model";


export abstract class ZoneGateway{
  abstract saveZone(params: IZoneRequest): Observable<IZoneModel>;

  abstract updateZone(params: IZoneRequest): Observable<IZoneModel>;

  abstract findZoneById(id: number): Observable<IZoneModel>;

  abstract findZones(): Observable<Array<IZoneModel>>;

  abstract deleteZone(id: number): Observable<boolean>;
}
