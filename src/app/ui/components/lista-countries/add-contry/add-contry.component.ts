import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryUseCase } from 'src/app/domain/usecase/country.usecase';
import { ICountryModel } from '../../../../domain/models/country/country.model';

@Component({
  selector: 'app-add-contry',
  templateUrl: './add-contry.component.html',
  styleUrls: ['./add-contry.component.css']
})
export class AddContryComponent implements OnInit {

  @Output() option = new EventEmitter<boolean>();
  id: number;
  name: string;
  zoneId: number;
  activo: boolean = true;

  constructor(private countryUseCase: CountryUseCase) { }

  ngOnInit(): void {
  }

  async guardar(){
    const data = {
      countryName: this.name,
      countryZone: this.zoneId
    }

    await this.countryUseCase.saveCountry(data).subscribe(result => {
      alert(`Se ha guardado el pais ${data.countryName}`)
      this.name = '';
      this.zoneId = 0;
      this.option.emit(false);
    })
  }

  @Input()
  set country(item: ICountryModel | null) {
    if (item != null) {
      // @ts-ignore
      this.id = item.id;
      this.name = item.countryName;
      this.zoneId = item.countryZone;
      //@ts-ignore
      this.activo = false;
    }
  }

  async editCountry() {
    const data = {
      id: this.id,
      countryName: this.name,
      countryZone: this.zoneId
    }
    this.countryUseCase.updateCountry(data).subscribe(result => {
      alert('Country actualizado');
      this.option.emit(false);
    })
    this.activo = true;
  }

}
