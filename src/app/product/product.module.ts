import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule {
  productId:Number;
  productTitle:String;
  productPrice:Number;
  productDiscountPrice:Number;
  productDiscount:Number;
  productImageUrl:String;

  constructor(){
    this.productId =0;
    this.productTitle="NA";
    this.productDiscount=0;
    this.productPrice=0;
    this.productDiscountPrice=0;
    this.productImageUrl = "noimage.png";
  }
}
