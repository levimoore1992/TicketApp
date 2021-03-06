import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ListingsComponent} from './views/listings/listings.component';
import {EventsComponent} from './views/events/events.component';
import {AuthGuardService} from '../services/auth-guard.service';
import {PostListingComponent} from './views/post-listing/post-listing.component';


const routes: Routes = [

  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'listings', component: ListingsComponent, canActivate: [AuthGuardService]},
  {path: 'events', component: EventsComponent, canActivate: [AuthGuardService]},
  {path: 'post', component: PostListingComponent, canActivate: [AuthGuardService]},
    {
    path: 'auth',
    loadChildren: () => import ('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
