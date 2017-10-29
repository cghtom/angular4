import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes} from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

import { SpotifyService } from './services/spotify-service';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide : APP_BASE_HREF, useValue : '/'},
    {provide : LocationStrategy, useClass : HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
