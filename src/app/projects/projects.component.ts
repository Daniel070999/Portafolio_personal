import { Component, OnInit } from '@angular/core';
import * as Isotope from 'isotope-layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  images: any = [
    {
      img: 'https://cutesolution.com/tf/maslin/light/assets/img/projects/work-6.jpg',
      alt: 'webdesign',
      value: 10
    },
    {
      img: 'https://example.com/image2.jpg',
      alt: 'Descripción de la imagen 2',
      value: 20
    },
    {
      img: 'https://example.com/image3.jpg',
      alt: 'Descripción de la imagen 3',
      value: 30
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
