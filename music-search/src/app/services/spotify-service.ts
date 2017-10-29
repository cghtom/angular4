import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';


/*

TODO issues with the spotify api acuthentication & authorization that became more difficult is taking too much time for
now. If interested will look into this later, but for now just read the theory and find a more advanced routing sample somewhere else
...
Client ID
83e01510b27f493788f71bb9857e8d2b
Client Secret
ab11bc7ff8224dbc98c2027f501b5f8f

Get a token:
curl -X GET https://accounts.spotify.com/authorize?client_id=83e01510b27f493788f71bb9857e8d2b&redirect_uri=http:%2F%2Flocahost:4200%2FspotifyTokenCallback&scope=user-read-private%20user-read-email&response_type=token&state=123


Then use the token
curl -X GET "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist" -H "Authorization: Bearer music-search"
*/

export class SpotifyService{

  constructor(private http:Http){}

  search(qry : string): Observable<any>{
    let qryParams = [
      'q='+qry,
      'type=track'].join('&');

    return this.http.request("https://api.spotify.com/v1/search?"+qryParams)
      .map(res => res.json());
  }
}
