import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent {

  expertises: any = [
    {
      name: 'Java',
      value: '90'
    },
    {
      name: 'JavaScript',
      value: '85'
    },
    {
      name: 'HTML + CSS',
      value: '75'
    },
    {
      name: 'Dart',
      value: '70'
    },
    {
      name: 'Kotlin',
      value: '60'
    },
    {
      name: 'JQuery',
      value: '80'
    },
    {
      name: 'SQL',
      value: '85'
    },
    {
      name: 'Python',
      value: '75'
    },
  ]

}
