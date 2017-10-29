import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchService } from './services/search-service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SearchService,
    {provide : 'YOUTUBE_API_KEY', useValue: ' AIzaSyAcYdRc5VuZJPoIzA0uE4BhJcdaCoX6mHU'},
    {provide : 'YOUTUBE_API_URL', useValue: 'https://www.googleapis.com/youtube/v3/search'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
