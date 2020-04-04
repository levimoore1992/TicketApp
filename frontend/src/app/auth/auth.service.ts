import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  loginUser(body) {
    return this.http.post('http://127.0.0.1:80/api/auth/login', body);
  }

  registerUser(body) {
    return this.http.post('http://127.0.0.1:80/api/auth/register', body);
  }
  isAuthenticated() {

      return this.http.get('http://127.0.0.1:80/api/auth/user');
  }

  logout(body) {
          this.http.post('http://127.0.0.1:80/api/auth/logout', body);
  }

  getToken() {
    return JSON.stringify(localStorage.getItem('token'));
  }
}
