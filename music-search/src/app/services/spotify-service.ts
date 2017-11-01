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
http://d51a58c6b.access.telenet.be/angular/getToken.html#access_token=BQBnMEa3MmNMFYMkqIbxUQn7S4relbJtXpYPCs95naEEKcf_kTDwyAYNvdy-TXHJb5FD65AItZKJsvOYTqgfnLysw9n1UGXm-icJCObhKNnzcOf4_-GTkzrN2Dn-1g433Qx1N5QOW8W3LGL-UsGgW25gNo47&token_type=Bearer&expires_in=3600&state=123
--> get access_token from the  queryString...


Then use the token and test:
curl -X GET "https://api.spotify.com/v1/search?q=tania%20bowra&type=track" -H "Authorization: Bearer BQBnMEa3MmNMFYMkqIbxUQn7S4relbJtXpYPCs95naEEKcf_kTDwyAYNvdy-TXHJb5FD65AItZKJsvOYTqgfnLysw9n1UGXm-icJCObhKNnzcOf4_-GTkzrN2Dn-1g433Qx1N5QOW8W3LGL-UsGgW25gNo47"
*/

@Injectable()
export class SpotifyService{

  accessToken:string="BQBnMEa3MmNMFYMkqIbxUQn7S4relbJtXpYPCs95naEEKcf_kTDwyAYNvdy-TXHJb5FD65AItZKJsvOYTqgfnLysw9n1UGXm-icJCObhKNnzcOf4_-GTkzrN2Dn-1g433Qx1N5QOW8W3LGL-UsGgW25gNo47";

  constructor(private http:Http){}

  searchTrack(qry : string): Observable<any>{
    let qryParams = [
      'q='+qry,
      'type=track'].join('&');

    const headers = new Headers({
      'Authorization': `Bearer ${this.accessToken}`
    });
    const options = new RequestOptions({ headers: headers});

    return this.http.request("https://api.spotify.com/v1/search?"+qryParams, options)
      .map(res => res.json(), err=>console.log("error:",err)); // converst responsejsonstring to Object
  }
}
