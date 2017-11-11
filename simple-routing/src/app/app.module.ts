import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, Router, RouterModule } from '@angular/router';
import { childRoutes, ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';

const routes:Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'contactus', redirectTo : 'contact'},
  // nested:
  {
  path: 'products',
  component: ProductsComponent,
  children: childRoutes
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    RouterModule.forRoot(routes/*, { enableTracing: true }*/)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // by default angular4 uses html5 shizzle that is not supported by all browsers yet ... hashlocationstrategy always works...
    { provide: APP_BASE_HREF, useValue: '/' } // used for relative routes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
