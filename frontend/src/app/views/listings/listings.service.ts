import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient) { }

  getListings() {
    return this.http.get('http://127.0.0.1:80/api/listings/');
  }

}
