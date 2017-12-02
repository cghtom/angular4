import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './content-tab-component.component.html',
  styleUrls: ['./content-tab-component.component.css']
})
export class ContentTabComponentComponent implements OnInit {

  @Input('title') title:string;
  active = false ;
  name:string;

  constructor() { }

  ngOnInit() {
  }

}
