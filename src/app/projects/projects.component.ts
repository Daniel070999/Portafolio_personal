import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import * as Isotope from 'isotope-layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  projects: any = [
    {
      img: '../assets/images/projects/hdt.png',
      type: 'mobile front back',
      title: 'Herramientas de Texto',
      description: 'La aplicación cuenta con varias herramientas que de seguro te servirán',
      link: 'https://play.google.com/store/apps/details?id=appht.danielpativas.herramientasdetexto&hl=es_EC&gl=US'
    },
    {
      img: '../assets/images/projects/cyd.png',
      type: 'mobile front',
      title: 'Cobros y Deudas',
      description: 'La aplicación ayuda con el correcto manejo de finanzas personales como pueden ser préstamos pequeños.',
      link: 'https://play.google.com/store/apps/details?id=appcyb.danielpativas.cobrosydeudas&hl=es_EC&gl=US'
    },
    {
      img: '../assets/images/projects/cdm.png',
      type: 'mobile front',
      title: 'Carnet de Mascotas',
      description: 'La aplicación te permite llevar un mejor control de registros de tu mascota',
      link: 'https://play.google.com/store/apps/details?id=appccm.danielpativas.carnetdecontrolmascotas&hl=es_EC&gl=US'
    },
    {
      img: '../assets/images/projects/jwt.png',
      type: 'back',
      title: 'JWT con SpringBoot',
      description: 'Práctica de Web Service realizada en Spring Boot con la integración de seguridad de Json Web Token',
      link: 'https://github.com/Daniel070999/springBoot_Practica_JWT'
    },
    {
      img: '../assets/images/projects/webangular.png',
      type: 'web back',
      title: 'Consumo de Web Service con Angular',
      description: 'Práctica general en Angular con el Consumo de Web Service',
      link: 'https://github.com/Daniel070999/practicaAngular'
    }
  ];

  ngOnInit(): void {
    Aos.init();
    $(window).on('load', function () {
      var projectIsotope = $('.project-container').isotope({
        itemSelector: '.project-grid-item'
      });

      $('#project-flters li').on('click', function () {
        $("#project-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        projectIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
    });
  }

  showRepository() {
    window.open('https://github.com/Daniel070999');
  }
}
