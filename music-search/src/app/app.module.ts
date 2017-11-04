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
import { SearchComponent } from './search/search.component';

const routes:Routes = [
  {path : '', redirectTo : 'search', pathMatch : 'full'},
  {path : 'search', component : SearchComponent},
  {path : 'tracks/:id', component : TrackComponent },
  {path : 'artists/:id', component : ArtistComponent},
  {path : 'albums/:id', component : AlbumComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes/*, { enableTracing: true }*/)
  ],
  providers: [
    {provide : APP_BASE_HREF, useValue : '/'},
    {provide : LocationStrategy, useClass : HashLocationStrategy},
    {provide : SpotifyService, useClass : SpotifyService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
