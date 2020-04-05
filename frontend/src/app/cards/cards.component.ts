import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() payload: {title: string, price: number, image: string, seller: string};




  constructor() { }

  ngOnInit(): void {
  }

  purchase(seller: string) {
    
  }
}
