import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { configureMusicTests, RootCmp, advance, createRoot } from '../test/test.module';
import { MockSpotifyService } from '../test/spotify.service.mock';

import { ArtistComponent } from './artist.component';
import { SpotifyService } from '../services/spotify-service';


describe('ArtistComponent', () => {
  // let component: ArtistComponent;
  // let fixture: ComponentFixture<ArtistComponent>;

  beforeEach(async(() => {
    configureMusicTests();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ArtistComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  describe('initialization', ()=>{
    it('retrieves the artis info', fakeAsync(
      inject([Router, SpotifyService],
        (router:Router, mockSpotifyService:MockSpotifyService) => {
          // init the root component (with the <router-outlet>)
          const fixture = createRoot(router, RootCmp);

          // naviate to a url
          router.navigateByUrl('/artists/3');

          // let angular act on the url change:
          advance(fixture);

          //verify the service was called to retrieve an artist wit the correct Id
          expect(mockSpotifyService.getArtistSpy).toHaveBeenCalledWith('3');
        })
    ));
  });

  describe('back button', () => {
    it('returns to previous location', fakeAsync(
      inject([Router, Location], (router:Router, location:Location) => {
        const fixture = createRoot(router, RootCmp);
        expect(location.path()).toEqual('/');

        router.navigateByUrl('/artists/3');
        advance(fixture);
        expect(location.path()).toEqual('/artists/3');

        router.navigateByUrl('/artists/4');
        advance(fixture);
        expect(location.path()).toEqual('/artists/4');

        const artist = fixture.debugElement.children[1].componentInstance;
        artist.back();
        advance(fixture);
        expect(location.path()).toEqual('/artists/3');

        artist.back();
        advance(fixture);
        expect(location.path()).toEqual('/');
      })
    ));
  });

  describe('rendering of DOM',()=>{
    it('render artist info', fakeAsync(
      inject([Router, SpotifyService], (router:Router, mockSpotifyService: MockSpotifyService)=>{
        const fixture = createRoot(router, RootCmp);

        const artist = {
          name : "Jim Morrison",
          images : [{url: 'someImageUrl'}, {url: 'thumbNailImageUrl'}],
          followers : 5
        };
        mockSpotifyService.setResponse(artist);

        router.navigateByUrl('/artists/3');
        advance(fixture);

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').innerHTML).toContain("Jim Morrison");
    })));
  })

  //template for test:
  /*
  describe('',()=>{
    it('', fakeAsync(inject([], ()=>{

    })));
  })
  */

});
