import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from './user.model';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('cur user should be null on initializing', inject([UserService], (service: UserService) => {
    let curUser;
    service.currentUser.subscribe((newCurUser)=>{
      curUser = newCurUser;
    });
    expect(curUser).toBeNull;
  }));

  it('cur user should be new User',
    inject([UserService], (service: UserService) => {
      let curUser;
      service.currentUser.subscribe((newCurUser)=>{
        curUser = newCurUser;
      });
      let newUser = new User("Urge Overkill", "no avatar")
      service.setCurrentUser(newUser);
      expect(curUser).toBe(newUser);
    })
  );

  it('cur user should be send when subscribing after last curUser was received',
      inject([UserService], (service: UserService) => {
        let newUser = new User("Urge Overkill", "no avatar")
        service.setCurrentUser(newUser);

        let curUser;
        service.currentUser.subscribe((newCurUser)=>{
          curUser = newCurUser;
        });
        expect(curUser).toBe(newUser);
    })
  );
});
