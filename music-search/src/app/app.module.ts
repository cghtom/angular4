import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes} from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { SpotifyService } from './services/spotify-service';

import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth-service';
import { AUTH_PROVIDERS } from './services/auth-service';
import { LoggedInGuard } from './logged-in.guard'
import { ProtectedComponent } from './protected/protected.component';



const routes:Routes = [
  {path : '', redirectTo : 'search', pathMatch : 'full'},
  {path : 'search', component : SearchComponent},
  {path : 'tracks/:id', component : TrackComponent },
  {path : 'artists/:id', component : ArtistComponent},
  {path : 'albums/:id', component : AlbumComponent},

  // {path : 'login', component : LoginComponent}, --> if put it on the main page...
  {path : 'protected' , component : ProtectedComponent, canActivate : [LoggedInGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent,
    LoginComponent,
    ProtectedComponent
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
    {provide : SpotifyService, useClass : SpotifyService},
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
