import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {
  ngOnInit(): void {
    //splash screen
    window.addEventListener('load', () => {
      const splashScreen = document.getElementById('splash-screen');
      setTimeout(() => {
        splashScreen!.style.display = 'none';
      }, 3000); // 2000ms = 2 segundos
    });
    //pre load
    window.addEventListener('load', function () {
      function preLoader(): void {
        setTimeout(function () {
          $('#preloader-wapper .loader-middle').addClass('loaded');
          setTimeout(function () {
            $('#preloader-wapper').addClass('loaded');
            setTimeout(function () {
              $('#preloader-wapper').remove();
            }, 400);
          }, 600);
        }, 2000);
      }
      preLoader();
    });

  }



}
