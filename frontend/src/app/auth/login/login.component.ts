import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
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
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

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
    console.log(res);
          // @ts-ignore
    this.authService.authToken.next(res.token);
    this.authService.isAuthenticatedSubject.next(true);
    this.router.navigate(['/']);
  });
  }
}
