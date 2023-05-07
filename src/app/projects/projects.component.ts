import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import * as Isotope from 'isotope-layout';
import { DataPortafolioService } from '../data-portafolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor(private listProjects: DataPortafolioService) { }

  projects: any = [];

  ngOnInit(): void {

    this.listProjects.getProjects().subscribe(
      response => {
        this.projects = response;
      }
    );

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
