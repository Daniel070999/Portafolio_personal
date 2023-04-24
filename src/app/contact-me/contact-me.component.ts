import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  name = '';
  subject = '';
  message = '';
  formSubmitted = false;


  enviar() {
    if (this.name && this.subject && this.message) {
      const mess = this.message + '\n\n Le saluda:' + this.name;
      window.open(`mailto:danielixo99dev@gmail.com?subject=${this.subject}&body=${mess}`);
    } else {
      this.formSubmitted = true;
    }
  }


}
