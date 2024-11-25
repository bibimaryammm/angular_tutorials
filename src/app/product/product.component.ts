import { Component } from '@angular/core';
import { ProductModule } from './product.module';
import { NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,RouterOutlet,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  service:ProductService = new ProductService;
  products:ProductModule[] = [];
  constructor(){
    this.products = this.service.getAllProducts();
  }


}
