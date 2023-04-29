import { Component, OnInit } from '@angular/core';
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
      type: 'movil dart',
      title: 'Herramientas de Texto',
      description: 'La aplicación cuenta con varias herramientas que de seguro te servirán',
      link: 'https://play.google.com/store/apps/details?id=appht.danielpativas.herramientasdetexto&hl=es_EC&gl=US'
    },
    {
      img: '../assets/images/projects/cyd.jpg',
      type: 'movil java',
      title: 'Cobros y Deudas',
      description: 'La aplicación ayuda con el correcto manejo de finanzas personales como pueden ser préstamos pequeños.',
      link: 'https://play.google.com/store/apps/details?id=appcyb.danielpativas.cobrosydeudas&hl=es_EC&gl=US'
    },
    {
      img: '../assets/images/projects/cdm.png',
      type: 'movil dart',
      title: 'Carnet de Mascotas',
      description: 'La aplicación te permite llevar un mejor control de registros de tu mascota',
      link: 'https://play.google.com/store/apps/details?id=appccm.danielpativas.carnetdecontrolmascotas&hl=es_EC&gl=US'
    }
  ];

  ngOnInit(): void {


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

}
