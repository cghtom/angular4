import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-styling',
  templateUrl: './inline-styling.component.html',
  styles:  [`
    .highlight{
      border:2px solid red;
      background-color:yellow;
      text-align:center;
      margin-bottom: 20px;
    }`]
})
export class InlineStylingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
