import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdsComponent } from './ui/pages/birds/birds.component';
import { CountriesComponent } from './ui/pages/countries/countries.component';
import { ZonesComponent } from './ui/pages/zones/zones.component';

const routes: Routes = [
  {path: 'birds', component: BirdsComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'zones', component: ZonesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
