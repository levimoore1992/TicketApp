import { Component, OnInit } from '@angular/core';
import {EventsService} from './events.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsService, private router: Router) { }
  data;
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(res => {
      this.data = res;
      console.log(this.data);

    });
  }

  navigate(slug: any) {
    this.router.navigate([slug]);
  }
}
