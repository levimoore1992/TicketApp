import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from "../../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getListings() {
    const httpOptions = this.authService.returnHttpOptions();
    return this.http.get('http://127.0.0.1:80/api/listings/', httpOptions);
  }

}
