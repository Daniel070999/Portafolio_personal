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
      type: 'application webdesign',
      value: 10
    },
    {
      img: '../assets/images/projects/cyd.jpg',
      type: 'application webdesign',
      value: 10
    },
    {
      img: '../assets/images/projects/cyd.jpg',
      type: 'application',
      value: 10
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
