import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleRequestComponent } from './simple-request/simple-request.component';
import { SimpleRequestService } from './services/simple-request-service'

@NgModule({
  declarations: [
    AppComponent,
    SimpleRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SimpleRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
