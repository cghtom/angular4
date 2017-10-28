import { Component, OnInit, HostBinding , Input} from '@angular/core';
import { Idea } from './idea.model';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() idea:Idea;

  constructor() {
    this.idea = new Idea('Angular 2', 'http://angular.io', 10);
 }

  ngOnInit() {
  }

  upVote(): boolean{
    this.idea.upVote();
    return false;
  }

  downVote(): boolean{
    this.idea.downVote();
    return false;
  }
}
