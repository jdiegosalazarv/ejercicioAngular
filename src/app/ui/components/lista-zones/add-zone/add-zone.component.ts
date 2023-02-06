import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IZoneModel } from 'src/app/domain/models/zone/zone.mode';
import { ZoneUseCase } from 'src/app/domain/usecase/zone.usecase';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit {

  @Output() option = new EventEmitter<boolean>();
  id: number;
  name:string;
  activo: boolean = true;

  constructor(private zoneUseCase: ZoneUseCase) { }

  ngOnInit(): void {
  }

  async guardar(){
    const data = {
      zoneName: this.name,
    }

    await this.zoneUseCase.saveZone(data).subscribe(result => {
      alert(`Se ha guardado la zona ${data.zoneName}`)
      this.name = '';
      this.option.emit(false);
    })
  }

  @Input()
  set zone(item: IZoneModel | null) {
    if (item != null) {
      // @ts-ignore
      this.id = item.id;
      this.name = item.zoneName;
      //@ts-ignore
      this.activo = false;
    }
  }

  async editCountry() {
    const data = {
      id: this.id,
      zoneName: this.name,
    }
    this.zoneUseCase.updateZone(data).subscribe(result => {
      alert('Zone actualizado');
      this.option.emit(false);
    })
    this.activo = true;
  }

}
