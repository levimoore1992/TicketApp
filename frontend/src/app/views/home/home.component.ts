import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public columns: any[] = [{field: 'event_id', title: 'Event'},
                          {field: 'price', title: 'Price'},
                          {field: 'status', title: 'Status'}];
  listingData;
  imageSource: string;
  public purchaseColumns = [
    {title: 'Event', field: 'event_id'},
    {title: 'Price', field: 'price'},
    {title: 'Status', field: 'status'},
    {title: 'Seller', field: 'seller'},

  ]
  mockData = [
  ];
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    const httpOptions = this.authService.returnHttpOptions();
    this.http.get('http://localhost:80/api/listings/user-listings', httpOptions).subscribe(res => {
    this.listingData = res;

    });
    // this.http.get('http://localhost:80/api/user_profile', httpOptions).subscribe(res => {
    //   // @ts-ignore
    //   this.imageSource = `http://localhost:80/media/${res.image_source}`;
    // });
  }


}
