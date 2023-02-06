import { Component, OnInit } from '@angular/core';
import { IBirdModel } from 'src/app/domain/models/bird/bird.model';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // listaBirds: IBirdModel[] = [{
  //   id: 1,
  //   commonName: "pajaro",
  //   scientificName: "string"
  // },
  // {
  //   id: 2,
  //   commonName: "pajaro2",
  //   scientificName: "string2"
  // }
  // ]

}
