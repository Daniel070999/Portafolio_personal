import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: any;
  ngOnInit(): void {
    this.navbar = document.getElementById('navbar');
    console.log(this.navbar);
    window.addEventListener('scroll', (): void => {
      if (window.scrollY > 0) {
        this.navbar.classList.add('navbar-solid');
        this.navbar.classList.remove('navbar-transparent');
      } else {
        this.navbar.classList.remove('navbar-solid');
        this.navbar.classList.add('navbar-transparent');
      }
    });
  }
}
