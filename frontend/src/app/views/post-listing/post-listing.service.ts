import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostListingService {

  constructor(private http: HttpClient) { }


  createPost(body) {
    return this.http.post('http://localhost:80/api/listings/', body);
  }

  getEvents() {
    return this.http.get('http://localhost:80/api/events/');

  }
}
