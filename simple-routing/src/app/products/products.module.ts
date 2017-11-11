import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';

export const childRoutes:Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProductComponent, ProductsComponent, MainComponent],
  exports:[ProductsComponent]
})

export class ProductsModule { }
