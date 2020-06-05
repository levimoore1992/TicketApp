import {Component, OnChanges, OnInit} from '@angular/core';
import {NavbarService} from './navbar.service';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  public source: Array<string>;
  public data;
  isAuthenticated;

  constructor(private navService: NavbarService, private authService: AuthService, private router: Router) {
      this.navService.getEvents().subscribe(res => {
      // @ts-ignore
        this.source = res.map(item => item.name);
        this.data = this.source.slice();

    });
  }

  ngOnInit(): void {
      this.isAuthenticated = this.authService.isAuthenticated();

  }
  ngOnChanges() {
  }

  handleFilter(value: string) {
            this.data = this.source.filter((s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  logout() {
    this.authService.logout();
  }

}
