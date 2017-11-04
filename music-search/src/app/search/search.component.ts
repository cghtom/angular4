import { Component, OnInit, AfterViewInit, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify-service';

import { Observable } from 'rxjs';
import 'rxjs/operators/map';
import 'rxjs/operator/filter'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild('newquery') searchTxt: ElementRef;
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  query: string;
  results: Object;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log("constructor params:", params);
      this.query = params['query'] || '';
    });
  }

  ngAfterViewInit() {

    Observable.fromEvent(this.searchTxt.nativeElement, 'keyup') // -> create stream of events
      .map((e: any) => e.target.value) // get text from searchbox --> stream of text
      .filter((text: string) => text.length > 2) // do not search for text with less then 2 chars
      .debounceTime(250) //only when user paused typing for 250 ms will we search
      .do(() => this.loading.emit(true)) //let component know we are loading ...
      .subscribe(
        (text: any) => {
          console.log('user typed :', text);
          this.submit(text);
        },
        (error:any) => console.log('error', error), //onerror
        ()=>this.loading.emit(false)); //finally
  }

  ngOnInit() {
    console.log("ngoninit search : " + this.query);
    this.search();
  }

  submit(queryString: string): void {
    this.router.navigate(['search'], { queryParams: { query: queryString } })
      .then(_ => this.search())
      .catch(e => console.log('error searching : ' + e));
  }

  search(): void {
    console.log('search query', this.query);
    if (!this.query) {
      return;
    }
    this.spotifyService.searchTrack(this.query).subscribe(res => this.renderResults(res));
  }

  renderResults(res) {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

}
