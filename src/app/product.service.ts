import { Injectable } from '@angular/core';
import { ProductModule } from './product/product.module';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
  allproducts: ProductModule[] = [];
  constructor() {
    this.allproducts = [
      {
        productId: 101,
        productTitle: "iPhone 16 Pro Max",
        productPrice: 150000,
        productDiscountPrice: 75000,
        productDiscount: 50,
        productImageUrl: "noimage.png"

      }, {
        productId: 102,
        productTitle: "iPhone 15 Pro Max",
        productPrice: 110000,
        productDiscountPrice: 55000,
        productDiscount: 50,
        productImageUrl: "noimage.png"

      }, {
        productId: 103,
        productTitle: "iPhone 14 Pro Max",
        productPrice: 91000,
        productDiscountPrice: 40000,
        productDiscount: 50,
        productImageUrl: "noimage.png"

      },
      {
        productId: 104,
        productTitle: "iPhone 13 Pro Max",
        productPrice: 79000,
        productDiscountPrice: 30000,
        productDiscount: 50,
        productImageUrl: "noimage.png"

      }];
  }

  public getAllProducts() {
    return this.allproducts;
  }

  public getProductById(id: number) {
    const prod={
      productId: 0,
        productTitle: "NA",
        productPrice: 0,
        productDiscountPrice: 0,
        productDiscount: 0,
        productImageUrl: "noimage.png"
    }
    for (let i = 0; i < this.allproducts.length; i++) {
      if (id==this.allproducts[i].productId) {
        return this.allproducts[i];
      }
      
    }
    return prod;
  }
}
