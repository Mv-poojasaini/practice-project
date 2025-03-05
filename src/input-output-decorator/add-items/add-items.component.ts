import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/model/product.type';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  @Input() cartItems: Product[] = [];
  @Output() removeFromCart = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onRemoveFromCart(productId: number) {
    this.removeFromCart.emit(productId);
  }
  
  // addToCart() {
  //   return this.store.dispatch(addToCart())
  // }
  // removeToCart() {
  //   return this.store.dispatch(removeFromCart())
  // }

}
