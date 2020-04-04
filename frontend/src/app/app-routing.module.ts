import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {ListingsComponent} from './listings/listings.component';
import {EventsComponent} from './events/events.component';
import {AuthGuardService} from "./auth/auth-guard.service";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'listings', component: ListingsComponent, canActivate: [AuthGuardService]},
  {path: 'events', component: EventsComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
