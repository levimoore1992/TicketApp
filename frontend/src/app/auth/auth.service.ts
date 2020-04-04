import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authToken = new BehaviorSubject(null);
  public isAuthenticatedSubject = new BehaviorSubject(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { }

  loginUser(body) {
    return this.http.post('http://127.0.0.1:80/api/auth/login', body);
  }

  registerUser(body) {
    return this.http.post('http://127.0.0.1:80/api/auth/register', body);
  }
  isAuthenticated() {
    return true;
  }
}
