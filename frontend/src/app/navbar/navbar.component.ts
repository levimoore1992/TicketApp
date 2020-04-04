import { Component, OnInit } from '@angular/core';
import {NavbarService} from './navbar.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public source: Array<string>;
  public data;
  isAuthenticated = false;
  private user: any;

  constructor(private navService: NavbarService, private authService: AuthService) {
      this.navService.getEvents().subscribe(res => {
      // @ts-ignore
        this.source = res.map(item => item.name);
        this.data = this.source.slice();

    });
  }

  ngOnInit(): void {
   this.authService.isAuthenticated().subscribe(res => {
     // @ts-ignore
     this.user = res.user;
   });
  }

  handleFilter(value: string) {
            this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  logout() {
    this.authService.logout(this.user);
  }
}
