import { Injectable } from '@angular/core';
import { User } from './user.model';

import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  currentUser : Subject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  setCurrentUser(newCurUser : User){
    this.currentUser.next(newCurUser);
  }
}

export const userServiceInjectables: Array<any> = [UserService];
