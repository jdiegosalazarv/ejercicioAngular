import { Observable } from "rxjs";
import { IBirdRequest } from "src/app/infrastructure/diven-adapter/bird/bird.model";
import { IBirdModel } from "../bird.model";

export abstract class BirdGateway{
  abstract saveBird(params: IBirdRequest): Observable<IBirdModel>;

  abstract updateBird(params: IBirdRequest): Observable<IBirdModel>;

  abstract findBirdById(id: number): Observable<IBirdModel>;

  abstract findBirds(): Observable<Array<IBirdModel>>;

  abstract deleteBird(id: number): Observable<boolean>;
}
