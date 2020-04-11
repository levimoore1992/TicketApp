import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public columns: any[] = [{field: 'event_id', title: 'Event'}, {field: 'price', title: 'Price'}];
listingData;
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    const httpOptions = this.authService.returnHttpOptions();
    this.http.get('http://localhost:80/api/listings/user-listings', httpOptions).subscribe(res => {
      this.listingData = res;
    });

  }

}
