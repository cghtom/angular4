import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-style',
  templateUrl: './shadow-dom-style.component.html',
  styleUrls: ['./shadow-dom-style.component.css'],
  encapsulation : ViewEncapsulation.Native
})
export class ShadowDomStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
