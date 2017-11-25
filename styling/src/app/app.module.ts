import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InlineStylingComponent } from './inline-styling/inline-styling.component';
import { ExternalStylegComponent } from './external-styleg/external-styleg.component';
import { ShadowDomStyleComponent } from './shadow-dom-style/shadow-dom-style.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineStylingComponent,
    ExternalStylegComponent,
    ShadowDomStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
