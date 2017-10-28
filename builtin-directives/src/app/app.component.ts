import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';
  a:number=30;b : number=20;
  str="yes";

  checkIfVisible(): boolean{
    return true;
  }

  color:string;
  fontSize:number;
  apply(color:string, fontSize:number) : void{
    this.color = color;
    this.fontSize = fontSize;
  }

  isBordered:boolean = false;
  toggleBorder():void{
    console.log("isBordered : " + this.isBordered);
    this.isBordered = !this.isBordered;
  }
}
