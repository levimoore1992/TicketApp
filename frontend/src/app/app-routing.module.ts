import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ListingsComponent} from './listings/listings.component';
import {EventsComponent} from './events/events.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'events', component: EventsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
