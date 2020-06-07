import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getListings() {
    const httpOptions = this.authService.returnHttpOptions();
    return this.http.get('http://127.0.0.1:80/api/listings/', httpOptions);
  }

  updateStatus(payload) {
    const httpOptions = this.authService.returnHttpOptions();
    return this.http.post('http://127.0.0.1:80/api/listings/update-status/', payload, httpOptions);
  }

  getUserListings() {
   const httpOptions = this.authService.returnHttpOptions();
   return this.http.get('http://localhost:80/api/listings/user-listings', httpOptions);
  }

}
