import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm:FormGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['ABC123']
    });
  }

  onSubmit(formValues: any):void{
    console.log("you submitted :", formValues);
  }


}
