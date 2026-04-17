import { Component } from '@angular/core';
import { CartSummary } from '../cart-summary/cart-summary';
import { MiniCartList } from '../mini-cart-list/mini-cart-list';

@Component({
  selector: 'app-cart-shell',
  imports: [CartSummary, MiniCartList],
  templateUrl: './cart-shell.html',
  styleUrl: './cart-shell.scss',
})
export class CartShell {}
