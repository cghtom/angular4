import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PriceServiceFixed } from './services/price-service-fixed';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PriceServiceFixed,
    {provide:'TITLE', useValue:'Product listing'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
