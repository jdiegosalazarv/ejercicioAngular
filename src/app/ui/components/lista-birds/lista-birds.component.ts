import { Component, Input, OnInit } from '@angular/core';
import { IBirdModel } from 'src/app/domain/models/bird/bird.model';
import { BirdUseCase } from 'src/app/domain/usecase/bird.usecase';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-birds',
  templateUrl: './lista-birds.component.html',
  styleUrls: ['./lista-birds.component.css']
})
export class ListaBirdsComponent implements OnInit {

  // @Input() lista: IBirdModel[];
  lista: IBirdModel[] | null = [];
  currentBird: IBirdModel | null;
  option: boolean = false;

  constructor(private birdUseCase: BirdUseCase) { }

  ngOnInit(): void {
    this.showList();
  }

  agregar(){
    this.option = true;
  }

  async showList(){
    await this.birdUseCase.findBirds().subscribe(result => {
      this.lista = result
    });
  }

  async delete(id: number) {
    await this.birdUseCase.deleteBird(id).subscribe(
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
    await this.birdUseCase.findBirdById(id).subscribe(result => {
      this.currentBird = result;
    });
  }

  async setOption(opt: boolean){
    await this.showList();
    this.option = opt;
  }
}
