import { Component } from '@angular/core';
import { Idea } from './idea/idea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ideas:Idea[];

  constructor(){
    this.ideas=[];
  }

  addIdea(title: HTMLInputElement, link: HTMLInputElement): boolean {

    this.ideas.push(new Idea(title.value, link.value));

    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    console.log("nr of ideas:" + this.ideas);
    return false;
  }

  sortedIdeas():Idea[]{
    this.ideas.sort((a:Idea , b:Idea) => b.nrOfVotes - a.nrOfVotes);
    return this.ideas;
  }
}
