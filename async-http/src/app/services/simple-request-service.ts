import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Observable} from 'rxjs';

@Injectable()
export class SimpleRequestService {

  url:string = "http://jsonplaceholder.typicode.com/posts/1";

  constructor(private http:Http){}

  makeRequest(): Observable<any> {
    return this.http.request(this.url);
  }
}
