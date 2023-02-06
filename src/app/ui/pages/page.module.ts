import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { BirdGateway } from 'src/app/domain/models/bird/gateway/bird.gateway';
import { BirdService } from 'src/app/infrastructure/diven-adapter/bird/bird.service';
import { CountryGateway } from 'src/app/domain/models/country/gateway/country.gateway';
import { CountryService } from 'src/app/infrastructure/diven-adapter/country/country.service';
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';
import { ZoneService } from 'src/app/infrastructure/diven-adapter/zone/zone.service';
import { DomainModule } from '../../domain/domain.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BirdsComponent } from './birds/birds.component';
import { ZonesComponent } from './zones/zones.component';
import { CountriesComponent } from './countries/countries.component';



@NgModule({
  declarations: [
    BirdsComponent,
    ZonesComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DomainModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: BirdGateway, useClass: BirdService},
    {provide: CountryGateway, useClass: CountryService},
    {provide: ZoneGateway, useClass: ZoneService}
  ],
  exports: [
    BirdsComponent,
    ZonesComponent,
    CountriesComponent
  ]
})
export class PageModule { }
