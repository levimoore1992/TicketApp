import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    EventsComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    DropDownsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
