import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

  login(user:string, password:string){
    if(user === 'user' && password === 'password'){
      localStorage.setItem('user', user);
      return true;
    }else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('user');
  }

  getUser():string{
    return localStorage.getItem('user');
  }

  isLoggedIn():boolean{
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
{provide: AuthService, useClass: AuthService }
];
