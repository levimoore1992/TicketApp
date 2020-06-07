import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { ListingsComponent } from './views/listings/listings.component';
import { EventsComponent } from './views/events/events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MenuModule } from '@progress/kendo-angular-menu';
import {MatMenuModule} from '@angular/material/menu';
import { PostListingComponent } from './views/post-listing/post-listing.component';
import {BodyModule, ExcelModule, GridModule, SharedModule} from '@progress/kendo-angular-grid';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    EventsComponent,
    NavbarComponent,
    CardsComponent,
    PostListingComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgbModule,
    DropDownsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MenuModule,
    MatMenuModule,
    GridModule,
    ExcelModule,
    SharedModule,
    AuthenticationModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
