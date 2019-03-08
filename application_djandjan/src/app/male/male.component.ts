import { Component, OnInit } from '@angular/core';
import { MaleService } from '../services/male.service';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.scss']
})
export class MaleComponent implements OnInit {

  males: any[];

  constructor(private maleService: MaleService) {
   }
  ngOnInit() {

    this.males = this.maleService.males;
  }
}