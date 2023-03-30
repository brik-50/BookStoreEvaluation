import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { ListBookComponent } from './list-book/list-book.component';
import { FormBookComponent } from './form-book/form-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    FormBookComponent,
    DetailsBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
