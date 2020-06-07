import {Component, OnInit} from '@angular/core';
import {ListingsService} from "../listings/listings.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public columns: any[] = [{field: 'event_id', title: 'Event'},
                          {field: 'price', title: 'Price'},
                          {field: 'status', title: 'Status'}];

  public purchaseColumns = [
    {title: 'Event', field: 'event_id'},
    {title: 'Price', field: 'price'},
    {title: 'Status', field: 'status'},
    {title: 'Seller', field: 'seller'},
  ]
  listingData;
  purchaseData;

  constructor(private listingsService: ListingsService) { }

  ngOnInit(): void {
   this.listingsService.getUserListings().subscribe(res => {
     this.listingData = res;

    });

  }


  sendItem({id}) {
    const payload = {
      id
    };
    this.listingsService.updateStatus(payload).subscribe();
  }
}
