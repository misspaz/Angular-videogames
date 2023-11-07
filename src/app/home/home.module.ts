import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent
  ]
})
export class HomeModule { }
