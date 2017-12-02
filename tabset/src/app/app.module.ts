import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentTabComponentComponent } from './content-tab-component/content-tab-component.component';
import { ContentTabsetComponentComponent } from './content-tabset-component/content-tabset-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentTabComponentComponent,
    ContentTabsetComponentComponent
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
