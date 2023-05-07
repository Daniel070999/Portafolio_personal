import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPortafolioService {

  constructor(private http: HttpClient) { }

  urlMain = 'https://portafolio-ab468-default-rtdb.firebaseio.com/.json';
  /**
  * se tiene acceso directo a la base con el siguiente formato:
  * https://firestore.googleapis.com/v1beta1/projects/{projectId}/databases/(default)/documents/{collection}
  * quedaria asi en mi caso:
  * https://firestore.googleapis.com/v1beta1/projects/portafolio-ab468/databases/(default)/documents/reviews/
  * 
  */
  urlReviews = 'https://firestore.googleapis.com/v1beta1/projects/portafolio-ab468/databases/(default)/documents/reviews/';
  urlProjects = 'https://firestore.googleapis.com/v1beta1/projects/portafolio-ab468/databases/(default)/documents/projects/';

  getData() {
    return this.http.get(this.urlMain);
  }

  getReviews() {
    return this.http.get(this.urlReviews);
  } 
  
  getProjects() {
    return this.http.get(this.urlProjects);
  }
}
