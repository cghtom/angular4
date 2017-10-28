import { Component } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm:FormGroup;
  productName:string;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['', Validators.compose(
        [
          Validators.required,
          skuValidator
        ])],
        'productName':['', Validators.required]
    });
    this.myForm.controls['sku'].valueChanges.subscribe( (value:string) =>{
      console.log("sku changed to " + value);
    });
    this.myForm.valueChanges.subscribe( (value:any) =>{
      console.log("form changed to " + value);
      this.logFormValidationErrors();
    });
  }

  onSubmit(formValues: any):void{
    console.log("you submitted :", formValues);
  }

  logFormValidationErrors():void{
    Object.keys(this.myForm.controls).forEach(key => {
    const controlErrors: ValidationErrors = this.myForm.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
  }
}


function skuValidator(c:FormControl):{[s: string]:boolean}{
  if(!c.value.match(/^123/)){
    return  {mustStartWith123: true};
  }
};
