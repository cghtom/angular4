import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../services/spotify-service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:any;

  constructor(private activatedRoute:ActivatedRoute,
            private location:Location,
            private spotifyService:SpotifyService) {
    this.activatedRoute.paramMap.subscribe(params => {
        this.id = params.get('id');
        if(this.id){
          this.spotifyService.getArtist(this.id).subscribe(res => this.renderArtist(res));
        }
      }
    );
  }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  renderArtist(res:any){
      if(res){
        this.artist = res;
      }
  }
}
