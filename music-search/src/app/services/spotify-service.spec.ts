import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';

import { SpotifyService } from './spotify-service';

function setupExpectedUrlAndMockResponse(mockBackend: MockBackend, urlToExpect:string, responseBody:string){
  mockBackend.connections.subscribe(c => {
    expect(c.request.url).toBe(urlToExpect);
    let response = new ResponseOptions({ body: responseBody });
    c.mockRespond(new Response(response));
  });
}

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

  describe('getTrack call rest api with trackid', () => {
    it('retrieves using the track ID',
      inject([SpotifyService, MockBackend],
        fakeAsync((spotifyService, mockBackend) => {

          setupExpectedUrlAndMockResponse(mockBackend, 'https://api.spotify.com/v1/tracks/TRACK_ID', '{"name": "felipe"}');

          let res;
          spotifyService.getTrack('TRACK_ID').subscribe((_res) => {
            res = _res;
          });
          tick();
          expect(res.name).toBe('felipe');
        })
      )
    );
    it('Retrieves album by calling correct rest api',
      inject([SpotifyService, MockBackend],
        fakeAsync((spotifyService, mockBackend) => {
          // 1. validate outgoing call to rest api + mock a response
          setupExpectedUrlAndMockResponse(mockBackend, 'https://api.spotify.com/v1/albums/ALBUM_ID', '{"name" : "riders on the storm"}');

          // 2. trigger operation to test
          let actual;
          spotifyService.getAlbum('ALBUM_ID').subscribe((response) => {
            actual = response;
          });
          tick(); //--> 2.1 make async call happen

          // 3. assert final result
          expect(actual.name).toBe('riders on the storm');
        })
      )
    );

    it('Search tracks by calling correct rest api',
      inject([SpotifyService, MockBackend],
        fakeAsync((spotifyService, mockBackend) => {
          // 1. validate outgoing call to rest api + mock a response
          setupExpectedUrlAndMockResponse(mockBackend, 'https://api.spotify.com/v1/search?q=TRACK_QRY&type=track', '{"name" : "Hello, I love you"}');

          // 2. trigger operation to test
          let actual;
          spotifyService.searchTrack('TRACK_QRY').subscribe((response) => {
            actual = response;
          });
          tick(); //--> 2.1 make async call happen

          // 3. assert final result
          expect(actual.name).toBe("Hello, I love you");
        })
      )
    );
  });
});
