import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { DateFormComponent } from './date-form/date-form.component';
import { RegistReactComponent } from './regist-react/regist-react.component';
import { EqualPwdDirective } from './directive/equal-pwd.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    DateFormComponent,
    RegistReactComponent,
    EqualPwdDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
