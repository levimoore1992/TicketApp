import { Component, OnInit } from '@angular/core';
import {EventsService} from './events.service';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventsService: EventsService,
              private router: Router,
              private authService: AuthService,
              ) { }
  events;
  ngOnInit(): void {


    this.eventsService.getEvents().subscribe(res => {
      this.events = res;

    });

  }


}
