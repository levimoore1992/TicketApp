import { Component, OnInit } from '@angular/core';
import {EventsService} from "./events.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }
  data;
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(res => {
      this.data = res;
    });
  }

}
