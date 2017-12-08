import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';

import { SpotifyService } from './spotify-service';

describe('SpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpotifyService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

describe('getTrack', () => {
    it('retrieves using the track ID',
      inject([SpotifyService, MockBackend],
          fakeAsync((spotifyService, mockBackend) => {
            mockBackend.connections.subscribe(c => {
              expect(c.request.url).toBe('https://api.spotify.com/v1/tracks/TRACK_ID');
              let response = new ResponseOptions({ body: '{"name": "felipe"}' });
              c.mockRespond(new Response(response));
            });

            let res;
            spotifyService.getTrack('TRACK_ID').subscribe((_res) => {
              res = _res;
            });
            tick();
            expect(res.name).toBe('felipe');
          })
      )
    );
});
