import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';


/**
See spotify authentication & authorization flows for more info ... and here under ...

Client ID
83e01510b27f493788f71bb9857e8d2b
Client Secret
ab11bc7ff8224dbc98c2027f501b5f8f

Make simple webpage with one link to authorization service of spotify;
  <a href="https://accounts.spotify.com/authorize?client_id=83e01510b27f493788f71bb9857e8d2b&response_type=token&redirect_uri=http%3A%2F%2Fd51a58c6b.access.telenet.be%2Fangular%2FgetToken.html&state=123&scope=user-read-private%20user-read-email">
    get an access token
  </a>



The redirect_uri must be registered as valid redirect_uri for your app/client_id
Then open webPage and click url, it will redirect you to login and then to redirect_uri with access_token as queryString parameter::

You get redirected to :
http://d51a58c6b.access.telenet.be/angular/getToken.html#access_token=BQDW9aAngR5Dd92vm8n_CDFgECWLFXyhBKA1kBlge_xxTyQtqQS6h6QQlMbLcy4KZFowK9cDDJTm46gS7MGSPQ2nD0l2Q8_cs--kd4WowKYyDNZtnss0VIzb9lwMyJj3B89Z1Wf8_zWICHvj-otLHMmYk9nL&token_type=Bearer&expires_in=3600&state=123
--> get access_token from the  queryString...


Then use the token and test:
curl -X GET "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist" -H "Authorization: Bearer BQDW9aAngR5Dd92vm8n_CDFgECWLFXyhBKA1kBlge_xxTyQtqQS6h6QQlMbLcy4KZFowK9cDDJTm46gS7MGSPQ2nD0l2Q8_cs--kd4WowKYyDNZtnss0VIzb9lwMyJj3B89Z1Wf8_zWICHvj-otLHMmYk9nL"
*/

@Injectable()
export class SpotifyService{

  baseURL:string="https://api.spotify.com/v1/"
  accessToken:string="BQDW9aAngR5Dd92vm8n_CDFgECWLFXyhBKA1kBlge_xxTyQtqQS6h6QQlMbLcy4KZFowK9cDDJTm46gS7MGSPQ2nD0l2Q8_cs--kd4WowKYyDNZtnss0VIzb9lwMyJj3B89Z1Wf8_zWICHvj-otLHMmYk9nL";

  constructor(private http:Http){}

  getTrack(trackId:string): Observable<any>{
    return this.callSpotifyGetApi(trackId, "tracks");
  }

  getAlbum(albumId : string): Observable<any>{
    return this.callSpotifyGetApi(albumId, "albums");
  }

  getArtist(artistId : string): Observable<any>{
    return this.callSpotifyGetApi(artistId, "artists");
  }

  searchTrack(qry : string): Observable<any>{
    let qryParams = [
      'q='+qry,
      'type=track'].join('&');
    return this.callSpotifySearchApi(qryParams);
  }

  callSpotifyGetApi(id:string, type:string): Observable<any>{
    let getURL:string = this.baseURL+type+"/"+id;
    return this.http.request(getURL, this.construcHeaderWithAuthorization())
      .map(res => res.json(), err=>console.log("error:",err)); // converst responsejsonstring to Object
  }

  callSpotifySearchApi(qryParams:string): Observable<any>{
    return this.http.request(this.baseURL+"search?"+qryParams, this.construcHeaderWithAuthorization())
      .map(res => res.json(), err=>console.log("error:",err)); // converst responsejsonstring to Object
  }

  construcHeaderWithAuthorization(): RequestOptions{
    const headers = new Headers({
      'Authorization': `Bearer ${this.accessToken}`
    });
    return new RequestOptions({ headers: headers});
  }
}
