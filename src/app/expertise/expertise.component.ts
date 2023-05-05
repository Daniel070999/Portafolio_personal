import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from '../data-portafolio.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent implements OnInit {

  constructor(private expertisesFirebase: DataPortafolioService) { }

  expertise: any=[];
  expertises:any=[];

  ngOnInit(): void {
    this.expertisesFirebase.getData().subscribe(
      response => {
        this.expertise = response;
        this.expertises = [
          {
            name: 'Java',
            value: this.expertise.java
          },
          {
            name: 'JavaScript',
            value: this.expertise.js
          },
          {
            name: 'HTML + CSS',
            value: this.expertise.htmlcss
          },
          {
            name: 'Dart',
            value: this.expertise.dart
          },
          {
            name: 'Kotlin',
            value: this.expertise.kotlin
          },
          {
            name: 'JQuery',
            value: this.expertise.jq
          },
          {
            name: 'SQL',
            value: this.expertise.sql
          },
          {
            name: 'Python',
            value: this.expertise.py
          },
        ]
      }
    );
  }

  

}
