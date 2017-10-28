import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PriceServiceFixed21 } from './services/price-service-fixed21';
import { PriceServiceFixed6 } from './services/price-service-fixed6';

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
    PriceServiceFixed21, // shorthand for {provide:'PriceServiceFixed21', useClass:PriceServiceFixed21}
    {provide : 'priceService6', useFactory: ()=> {return new PriceServiceFixed6();}},
    {provide:'TITLE', useValue:'Product listing'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
