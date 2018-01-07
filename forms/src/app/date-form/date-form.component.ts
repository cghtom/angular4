import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css']
})
export class DateFormComponent implements OnInit {
  // userName:FormControl = new FormControl("aaa");//input 初始值 aaaa

  formModel:FormGroup = new FormGroup({
    userName : new FormControl("aaa"),
    dateRange : new FormGroup({
      from : new FormControl(),
      to : new FormControl()
    }),
    emails : new FormArray([
      new FormControl("aaa1@136.com"),
      new FormControl("aaa2@qq.com")
    ])
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.formModel);
  }
  addEmail(email:any){
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }
}
