import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string;

  constructor(private authService:AuthService) {
    this.message = '';
  }

  login(username:string, password:string) : boolean{
      if(!this.authService.login(username, password)){
        this.message = 'Incorrect credentials';
        setTimeout(function(){
          this.message = '';
        }.bind(this), 2500)
      }
      return false; // wtf (dont want click event to bubble ...)??
  }

  logout():boolean{
    this.authService.logout();
    return false; //wt (don't want click event tot bubble up...) f??
  }

  ngOnInit() {
  }

}
