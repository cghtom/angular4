import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { SearchResult } from '../model/search-result.model';
import { SearchService } from '../services/search-service';
import { Observable } from 'rxjs';
import  'rxjs/operators/map';
import 'rxjs/operator/filter';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading : EventEmitter<boolean>         = new EventEmitter<boolean>();
  @Output() results : EventEmitter<SearchResult[]>  = new EventEmitter<SearchResult[]>();

  constructor(private searchService : SearchService, private el:ElementRef) {

  }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup') // -> create stream of events
      .map( (e:any) => e.target.value) // get text from searchbox --> stream of text
      .filter((text: string) => text.length > 2) // do not search for text with less then 2 chars
      .debounceTime(250) //only when user paused typing for 250 ms will we search
      .do( () => this.loading.emit(true)) //let component know we are loading ...
      .map( (query: string) => this.searchService.search(query)) // perform actual event
      .switch()
      .subscribe(
        (results : SearchResult[]) =>{ //onSucces
          this.results.emit(results);
          this.loading.emit(false); // is this necssary?
        },
        (err:any)=>{ //onerror
          console.log("Error retieving data from searchService : \n" + err);
          this.loading.emit(false);// is this necssary?
        },
        ()=>{ //oncompletion
          this.loading.emit(false);
        }
      );
  }

}
