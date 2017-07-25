import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

import { ApiService } from './communication.service'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikesListComponent } from './bikes/bikes-list/bikes-list.component';
import { BikesUserComponent } from './bikes/bikes-user/bikes-user.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BikesComponent,
    BikesListComponent,
    BikesUserComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
