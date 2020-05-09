import { Component, OnInit } from '@angular/core';
import {ListingsService} from './listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  cards;

  constructor(private service: ListingsService) { }

  ngOnInit(): void {
    this.service.getListings().subscribe(res => {
      console.log(res)
      this.cards = res;
    });

  }

}
