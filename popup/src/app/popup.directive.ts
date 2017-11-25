import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective {

  @Input() msg:String;

  constructor(hostElement:ElementRef) {
    console.log('directive bound!');
    console.log('hostElement:', hostElement);
  }

  @HostListener('click') displayMsg():void{
    alert(this.msg);
  }
}
