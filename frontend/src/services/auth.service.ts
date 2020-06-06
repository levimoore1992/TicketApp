import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  loginUser(body) {
    return this.http.post('http://127.0.0.1:80/api/auth/login', body);
  }

  registerUser(body) {
    return this.http.post('http://127.0.0.1:80/api/auth/register', body);
  }
  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
      localStorage.clear();
      location.reload();
      this.router.navigate(['']);
      this.http.post('http://127.0.0.1:80/api/auth/logout', null);
  }



  getUser() {
    const httpOptions = this.returnHttpOptions()
    return this.http.get('http://127.0.0.1:80/api/auth/user', httpOptions);
  }

  returnHttpOptions() {
    return {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    })
  };
  }
}
