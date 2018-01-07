import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";

  export function userNameValidator(control:FormControl):any{
    let my = /\S/;
    let valid = my.test(control.value);
    console.log("账号非空校验："+valid);
    return valid ? null:{"userName":"账号非空校验失败"};
  }
  export function userNameAsyncValidator(control:FormControl):any{
    let my = /\S/;
    let valid = my.test(control.value);
    console.log("账号非空校验："+valid);
    return Observable.of(valid ? null:{"userName":"账号非空校验失败111"});
  }
  export function equalValidator(group:FormGroup){
    let password :FormControl = group.get("passwd") as FormControl;
    let pwdConfirm :FormControl = group.get("pwdConfirm") as FormControl;
    let valid: boolean = (password.value === pwdConfirm.value);
    console.log("密码校验结果是："+valid);
    return valid?null:{"aaa":{"eee":"密码不一致"}};
  }