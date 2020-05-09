import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {loadStripe} from '@stripe/stripe-js';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() avatarImage?;
  @Input() backgroundImage;
  @Input() title;
  @Input() subtitles: string[];
  @Input() price?: number;
  stripe;
  @Input() messgeEnabled?: boolean;
  @Input() purchaseEnabled: boolean;
  constructor(private http: HttpClient) {}


  purchase() {
    const payload = {
      festival: this.title,
      price: this.price
    };
    loadStripe('pk_test_JkvU61nDrIpSUrRZvEe7XdGi').then(res => {
      this.stripe = res;
    });

    this.http.post('http://127.0.0.1:80/api/stripe', payload).subscribe(res => {
      // @ts-ignore
      this.stripe.redirectToCheckout({sessionId: res.id});
    });

  }
}
