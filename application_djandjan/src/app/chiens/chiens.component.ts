import { Component, OnInit } from '@angular/core';
import { ChiensElevageService } from '../services/chiens-elevage.service';


@Component({
  selector: 'app-chiens',
  templateUrl: './chiens.component.html',
  styleUrls: ['./chiens.component.scss']
})


export class ChiensComponent implements OnInit {

  dogs: any[];

  constructor(private chiensElevageService: ChiensElevageService) {
   }
  ngOnInit() {

    this.dogs = this.chiensElevageService.dogs;
  }
}
