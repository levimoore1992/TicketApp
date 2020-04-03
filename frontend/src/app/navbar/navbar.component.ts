import { Component, OnInit } from '@angular/core';
import {NavbarService} from "./navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public source: Array<string>;
  public data;
  constructor(private navService: NavbarService) {
      this.navService.getEvents().subscribe(res => {
        console.log(res);
      // @ts-ignore
        this.source = res.map(item => item.name);
        this.data = this.source.slice();

    });
  }

  ngOnInit(): void {

  }

  handleFilter(value: string) {
            this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
