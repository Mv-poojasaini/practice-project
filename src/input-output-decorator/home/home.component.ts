import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/product.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartItems: Product[] = []

  onRemoveFromCart(productId: number) {
   this.cartItems = this.cartItems.filter(item => item.id !== productId); 
  }

  onAddToCart(product: Product) {
    this.cartItems.push(product);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
