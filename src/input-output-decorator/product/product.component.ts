import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/model/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() addToCart = new EventEmitter<Product>()
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 }
  ]
  onAddToCart(product: Product) {
    this.addToCart.emit(product);
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
