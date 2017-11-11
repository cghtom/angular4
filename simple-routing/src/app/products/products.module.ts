import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

export const childRoutes:Routes = [
  { path: ':id', component: ProductComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent]
})

export class ProductsModule { }
