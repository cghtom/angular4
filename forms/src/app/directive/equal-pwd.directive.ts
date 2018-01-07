import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equalValidator } from 'app/validation/validators';

@Directive({
  selector: '[equalPwd]',
  providers: [{provide:NG_VALIDATORS, useValue: equalValidator,multi:true}]
})
export class EqualPwdDirective {

  constructor() { }

}
