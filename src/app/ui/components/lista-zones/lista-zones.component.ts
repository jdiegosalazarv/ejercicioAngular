import { Component, OnInit } from '@angular/core';
import { ZoneUseCase } from 'src/app/domain/usecase/zone.usecase';
import Swal from 'sweetalert2';
import { IZoneModel } from '../../../domain/models/zone/zone.mode';

@Component({
  selector: 'app-lista-zones',
  templateUrl: './lista-zones.component.html',
  styleUrls: ['./lista-zones.component.css']
})
export class ListaZonesComponent implements OnInit {

  lista: IZoneModel[] | null = [];
  currentZone: IZoneModel | null;
  option: boolean = false;

  constructor(private zoneUseCase:ZoneUseCase) { }

  ngOnInit(): void {
    this.showList();
  }

  agregar(){
    this.option = true;
  }

  async showList(){
    await this.zoneUseCase.findZones().subscribe(result => {
      this.lista = result
    });
  }

  async delete(id: number) {
    await this.zoneUseCase.deleteZone(id).subscribe(
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
    await this.zoneUseCase.findZoneById(id).subscribe(result => {
      this.currentZone = result;
    });
  }

  async setOption(opt: boolean){
    await this.showList();
    this.option = opt;
  }
}
