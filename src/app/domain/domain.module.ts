import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdUseCase } from './usecase/bird.usecase';
import { CountryUseCase } from './usecase/country.usecase';
import { ZoneUseCase } from './usecase/zone.usecase';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BirdUseCase,
    CountryUseCase,
    ZoneUseCase
  ]
})
export class DomainModule { }
