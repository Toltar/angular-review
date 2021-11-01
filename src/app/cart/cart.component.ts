import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  total = this.cartService
    .getItems()
    .map((item) => item.price)
    .reduce((p, c) => p + c);
  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
