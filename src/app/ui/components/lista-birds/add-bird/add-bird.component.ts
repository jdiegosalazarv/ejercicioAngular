import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BirdUseCase } from 'src/app/domain/usecase/bird.usecase';
import { IBirdRequest } from '../../../../infrastructure/diven-adapter/bird/bird.model';

@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrls: ['./add-bird.component.css']
})
export class AddBirdComponent implements OnInit {

  @Output() option = new EventEmitter<boolean>();
  id: number;
  name:string;
  cName:string;
  activo: boolean = true;

  constructor(private birdUseCase: BirdUseCase) { }

  ngOnInit(): void {
  }

  async guardar(){
    const data = {
      commonName: this.name,
      scientificName: this.cName
    }

    await this.birdUseCase.saveBird(data).subscribe(result => {
      alert(`Se ha guardado el pajaro ${data.commonName}`)
      this.name = '';
      this.cName = '';
      this.option.emit(false);
    })
  }

  @Input()
  set bird(item: IBirdRequest | null) {
    if (item != null) {
      // @ts-ignore
      this.id = item.id;
      this.name = item.commonName;
      //@ts-ignore
      this.cName = item.scientificName;
      this.activo = false;
    }
  }

  async editBird() {
    const data = {
      id: this.id,
      commonName: this.name,
      scientificName: this.cName
    }
    this.birdUseCase.updateBird(data).subscribe(result => {
      alert('bird actualizado');
      this.option.emit(false);
    })
    this.activo = true;
  }

}
