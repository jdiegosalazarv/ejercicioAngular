import { Component, OnInit } from '@angular/core';
import { ICountryModel } from 'src/app/domain/models/country/country.model';
import Swal from 'sweetalert2';
import { CountryUseCase } from '../../../domain/usecase/country.usecase';

@Component({
  selector: 'app-lista-countries',
  templateUrl: './lista-countries.component.html',
  styleUrls: ['./lista-countries.component.css']
})
export class ListaCountriesComponent implements OnInit {

  // @Input() lista: IBirdModel[];
  lista: ICountryModel[] | null = [];
  currentCountry: ICountryModel | null;
  option: boolean = false;

  constructor(private countryUseCase:CountryUseCase) { }

  ngOnInit(): void {
    this.showList();
  }

  agregar(){
    this.option = true;
  }

  async showList(){
    await this.countryUseCase.findCountrys().subscribe(result => {
      this.lista = result
    });
  }

  async delete(id: number) {
    await this.countryUseCase.deleteCountry(id).subscribe(
      result => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 1500
        });
        this.showList();
      }
    )
  }

  async edit(id: number) {
    this.option = true;
    await this.countryUseCase.findCountryById(id).subscribe(result => {
      this.currentCountry = result;
    });
  }

  async setOption(opt: boolean){
    await this.showList();
    this.option = opt;
  }

}
