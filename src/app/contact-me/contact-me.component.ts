import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from '../data-portafolio.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private dataContactMe: DataPortafolioService) { }

  data:any=[];

  ngOnInit(): void {
    this.dataContactMe.getData().subscribe(
      response=>{
        this.data=response;
      }
    );
  }

  name = '';
  subject = '';
  message = '';
  formSubmitted = false;


  enviar() {
    if (this.name && this.subject && this.message) {
      const mess = this.message + '\n\n Le saluda:' + this.name;
      window.open(`mailto:${this.data.email}?subject=${this.subject}&body=${mess}`);
    } else {
      this.formSubmitted = true;
    }
  }


}
