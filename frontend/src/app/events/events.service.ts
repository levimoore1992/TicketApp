import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }


  getEvents() {
     return this.http.get('http://127.0.0.1:80/api/events');
  }
}
