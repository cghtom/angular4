import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  results: Object;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute, private router:Router) {
    this.route.queryParams.subscribe(params => {
        console.log("constructor params:" ,params);
        this.query = params['query'] || '';
        // this.search();
      });
  }

  ngOnInit() {
    this.search();
  }

  submit(queryString: string) :void{
      this.router.navigate(['search'], {queryParams : {query : queryString}})
        .then(_ => this.search())
        .catch(e => console.log('error searching : ' + e));
  }

  search():void {
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
