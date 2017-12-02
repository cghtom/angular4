import { Component, AfterContentInit, QueryList, ContentChildren } from '@angular/core';
import {ContentTabComponentComponent} from '../content-tab-component/content-tab-component.component';

@Component({
  selector: 'tabset',
  templateUrl: './content-tabset-component.component.html',
  styleUrls: ['./content-tabset-component.component.css']
})
export class ContentTabsetComponentComponent implements AfterContentInit {

  @ContentChildren(ContentTabComponentComponent) tabs : QueryList<ContentTabComponentComponent>;

  constructor() { }

  ngAfterContentInit(): void{
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab2Activate : ContentTabComponentComponent ){
    this.tabs.toArray().forEach((t) => t.active = false);
    tab2Activate.active = true;
  }
}
