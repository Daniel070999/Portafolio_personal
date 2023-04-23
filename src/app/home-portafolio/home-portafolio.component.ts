import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portafolio',
  templateUrl: './home-portafolio.component.html',
  styleUrls: ['./home-portafolio.component.css']
})
export class HomePortafolioComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowBottom = window.innerHeight;

        if (sectionTop < windowBottom && sectionBottom > 0) {
          section.classList.add('animated');
        } else {
          section.classList.remove('animated');
        }
      });
    });
  }

}
