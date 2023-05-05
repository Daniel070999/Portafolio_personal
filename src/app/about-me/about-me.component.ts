import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from '../data-portafolio.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private dataPortafolio: DataPortafolioService) { }

  dataInformation: any = [];
  cv: any=[];

  ngOnInit(): void {
    this.dataPortafolio.getData().subscribe(
      response => this.cv = response
    );
  }
}