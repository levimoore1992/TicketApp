import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {loadStripe} from '@stripe/stripe-js';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() payload: {title: string, price: number, image: string, seller: string};

  stripe;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  purchase(payload: object) {
    loadStripe('pk_test_JkvU61nDrIpSUrRZvEe7XdGi').then(res => {
      this.stripe = res;
    });

    this.http.post('http://127.0.0.1:80/api/stripe', payload).subscribe(res => {
      // @ts-ignore
      this.stripe.redirectToCheckout({sessionId: res.id});
    });

  }
}
