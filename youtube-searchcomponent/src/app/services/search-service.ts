import { Inject, Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { SearchResult } from '../model/search-result.model';

@Injectable()
export class SearchService {

  constructor(private http: Http,
    @Inject('YOUTUBE_API_KEY') private apiKey: string,
    @Inject('YOUTUBE_API_URL') private apiUrl: string) {
  }Observable

  search(query: string): Observable<any> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((response) => {
        return (<any>response.json()).items.map(item => {
          // console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });

        });
      });
  }

  /*  search(query: string): Observable<SearchResult[]> {

      const params: string = [
        `q=${query}`,
        `key=${this.apiKey}`,
        `part=snippet`,
        `type=video`,
        `maxResults=10`
      ].join('&');
      const queryUrl = `${this.apiUrl}?${params}`;

      return this.http.get(queryUrl).map((response) => {
        return (<any>response.json()).items.map(item => {
          console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
    }*/
}
