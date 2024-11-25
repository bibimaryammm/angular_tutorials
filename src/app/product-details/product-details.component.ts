import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModule } from '../product/product.module';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  service: ProductService = new ProductService;
  product: ProductModule | undefined;
  constructor() {
    this.product = this.service.getProductById(101);
  }
}