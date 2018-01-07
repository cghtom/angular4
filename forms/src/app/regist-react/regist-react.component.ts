import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { userNameValidator, equalValidator, userNameAsyncValidator } from '../validation/validators';
@Component({
  selector: 'app-regist-react',
  templateUrl: './regist-react.component.html',
  styleUrls: ['./regist-react.component.css']
})
export class RegistReactComponent implements OnInit {
  formModel : FormGroup;
  // constructor() {
  //   this.formModel = new FormGroup({
  //     userName : new FormControl("sd"),
  //     mobile : new FormControl("asd"),
  //     passwordsGroup : new FormGroup({
  //       passwd : new FormControl("asd"),
  //       pwdConfirm : new FormControl()
  //     })
  //   });
  //  }
 
  constructor(fb: FormBuilder){
    this.formModel = fb.group({
      userName : ['',[userNameAsyncValidator]],
          mobile : [''],
          passwordsGroup : fb.group({
            passwd : [''],
            pwdConfirm : ['']
          })
          // },{validator:equalValidator})
    });
  }
  ngOnInit() {
  }
  onSubmit(){
    let isValid: boolean = this.formModel.get("userName").valid;
    let errorUserName: any = this.formModel.get("userName").errors;
    // console.log("userName的校验："+isValid+"；提示消息是："+JSON.stringify(errorUserName))
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }
}
