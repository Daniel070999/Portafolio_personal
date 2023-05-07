import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from '../data-portafolio.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private getReviews: DataPortafolioService) { }

  listReviews: any = [];
  /**
   * para leer la data
   * console.log(this.listReviews.documents[0].fields['name'].stringValue);
   */
  ngOnInit(): void {
    this.getReviews.getReviews().subscribe(
      response => {
        this.listReviews = response;
      }
    );
  }

}

