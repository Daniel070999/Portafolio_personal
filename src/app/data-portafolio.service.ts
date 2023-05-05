import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPortafolioService {

  constructor(private http: HttpClient) { }

  urlMain = 'https://portafolio-ab468-default-rtdb.firebaseio.com/.json';

  getData() {
    return this.http.get(this.urlMain);
  }
}
