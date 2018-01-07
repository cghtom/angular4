import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

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
      userName : [''],
          mobile : [''],
          passwordsGroup : fb.group({
            passwd : [''],
            pwdConfirm : ['']
          })
    });
  }
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel.value);
  }
}
