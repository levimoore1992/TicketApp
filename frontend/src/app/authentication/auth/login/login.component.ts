import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  // private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.isAuthenticated()) {
      router.navigate(['home']);
    }
  }
  ngOnInit(): void {
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
  const body = {
    username: this.form.get('username').value,
    password: this.form.get('password').value
  };
  this.authService.loginUser(body).subscribe(res => {
    // @ts-ignore
    localStorage.setItem('token', res.token);
    this.router.navigate(['']);
    location.reload();
  });
  }
}
