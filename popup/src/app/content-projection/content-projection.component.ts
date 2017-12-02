import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[app-content-projection]',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnInit {

  @Input() header:string;
  @HostBinding('attr.class') cssClass = 'ui message';

  constructor() { }

  ngOnInit() {
  }

}
