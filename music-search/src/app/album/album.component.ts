import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyService } from '../services/spotify-service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id:string
  album:any;

  constructor(private location:Location, activatedRoute:ActivatedRoute, private spotifyService:SpotifyService) {
    activatedRoute.paramMap.subscribe(params => {
        this.id = params.get('id');
        if(this.id){
          this.spotifyService.getAlbum(this.id).subscribe(res => this.renderAlbum(res))
        }
    });
  }

  ngOnInit() {
  }

  renderAlbum(res:any){    
    if(res){
      this.album = res;
    }
  }

  back(){
    this.location.back();
  }
}
