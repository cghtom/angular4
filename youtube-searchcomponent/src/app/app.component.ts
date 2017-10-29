import { Component} from '@angular/core';
import { SearchResult  } from './model/search-result.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Youtube search!';
  loading:boolean;
  searchResults:SearchResult[];

  constructor(){}

  updateSearchResults(results : SearchResult[]){
    console.log("receiving results : \n" + JSON.stringify(results));
    this.searchResults = results;
  }
}
