import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify-service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  id: string;
  track: Object;

  constructor(private spotifyService: SpotifyService, activatedRoute: ActivatedRoute, private location:Location) {
    activatedRoute.paramMap.subscribe((params)=> {
      console.log("trackComponent params : " , JSON.stringify(params))
      this.id = params.get('id');
      if(this.id){
        this.spotifyService.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
      }
    });
  }

  back(){
    this.location.back();
  }

  ngOnInit() {

  }

  renderTrack(res) {
    this.track = null;
    if (res) {
      this.track = res;
    }
  }
}
