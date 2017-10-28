export class Idea {
  title:string;
  idea:string;
  nrOfVotes:number;

// nrOfVotes are optional...
  constructor(title:string, idea:string, nrOfVotes?:number){
    this.title = title;
    this.idea = idea;
    this.nrOfVotes = nrOfVotes || 0;
  }

  upVote(){
    this.nrOfVotes +=1;
  }

  downVote(){
    this.nrOfVotes -=1;
  }
}
