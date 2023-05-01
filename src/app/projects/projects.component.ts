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
      description: 'The application has several tools that will surely be useful for you.',
      link: 'https://play.google.com/store/apps/details?id=appht.danielpativas.herramientasdetexto&hl=es_EC&gl=US',
      code: 'Dart'
    },
    {
      img: '../assets/images/projects/cyd.png',
      type: 'mobile front',
      title: 'Cobros y Deudas',
      description: 'The application helps with the proper management of personal finances such as small loans.',
      link: 'https://play.google.com/store/apps/details?id=appcyb.danielpativas.cobrosydeudas&hl=es_EC&gl=US',
      code: 'Java'
    },
    {
      img: '../assets/images/projects/cdm.png',
      type: 'mobile front',
      title: 'Carnet de Mascotas',
      description: 'The application allows you to keep better control of your pet'+"'"+'s records.',
      link: 'https://play.google.com/store/apps/details?id=appccm.danielpativas.carnetdecontrolmascotas&hl=es_EC&gl=US',
      code: 'Dart'
    },
    {
      img: '../assets/images/projects/jwt.png',
      type: 'back',
      title: 'JWT con SpringBoot',
      description: 'Web Service practice performed in Spring Boot with Json Web Token security integration.',
      link: 'https://github.com/Daniel070999/springBoot_Practica_JWT',
      code: 'Java'
    },
    {
      img: '../assets/images/projects/webangular.png',
      type: 'web back',
      title: 'Consumo de Web Service con Angular',
      description: 'General practice in Angular with Web Service Consumption.',
      link: 'https://github.com/Daniel070999/practicaAngular',
      code: 'TypeScript + HTML + CSS'
    },
    {
      img: '../assets/images/projects/fychat.png',
      type: 'mobile back',
      title: 'Chat GPT con Flutter',
      description: 'Practice with Flutter and GPT Chat connection through OpenAi API.',
      link: 'https://github.com/Daniel070999/flutter_chat_gpt',
      code: 'Dart'
    },
    {
      img: '../assets/images/projects/fyfb.png',
      type: 'mobile back',
      title: 'Firebase con Flutter',
      description: 'Practice with Flutter and real-time data reading with Firebase.',
      link: 'https://github.com/Daniel070999/firebase_flutter_lectura_snapshost',
      code: 'Dart'
    },
    {
      img: '../assets/images/projects/cal.png',
      type: 'mobile front',
      title: 'Calculador Básica',
      description: 'Practice of a calculator made with Kotlin programming language.',
      link: 'https://github.com/Daniel070999/Calculadora-Kotlin',
      code: 'Kotlin'
    },
    {
      img: '../assets/images/projects/fys.png',
      type: 'mobile back',
      title: 'Supabase con Flutter',
      description: 'Data management practice (CRUD) with Flutter and Supabase.',
      link: 'https://github.com/Daniel070999/flutter_Supabase',
      code: 'Dart'
    },
    {
      img: '../assets/images/projects/calyr.png',
      type: 'web front',
      title: 'Calculadora con React',
      description: 'Practice with React for the creation of a basic Calculator.',
      link: 'https://github.com/Daniel070999/Calculadora-React',
      code: 'JavaScript + HTML + CSS'
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
