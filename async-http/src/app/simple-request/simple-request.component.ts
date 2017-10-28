import { Component, OnInit } from '@angular/core';
import { SimpleRequestService } from '../services/simple-request-service';

@Component({
  selector: 'app-simple-request',
  templateUrl: './simple-request.component.html',
  styleUrls: ['./simple-request.component.css']
})
export class SimpleRequestComponent implements OnInit {

  loading:boolean=false;
  response:string;
  error:string;

  constructor(private requestService:SimpleRequestService ) {

  }

  ngOnInit() {
  }

  makeRequest(){
    this.loading = true;
    console.log("making the request...")
    this.requestService.makeRequest().subscribe(
      result => {
        this.response = result.json();
        this.loading=false;
        this.error="";
      },
      error=> {
        this.error=error;
        this.loading=false;
      }
    );
  }
}
