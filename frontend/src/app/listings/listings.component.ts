import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  cards = [{festival: 'edc', price: 500, image: 'https://festivalfire.com/wp-content/uploads/Beloved-2018-Melissa-Robin.jpg'}];

  constructor() { }

  ngOnInit(): void {
  }

}
