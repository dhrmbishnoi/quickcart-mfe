import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-cart-summary',
  imports: [CurrencyPipe],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss',
})
export class CartSummary {
  private readonly cartService = inject(Cart);
  readonly totalItems = computed(() => this.cartService.totalItems());
  readonly totalPrice = computed(() => this.cartService.totalPrice());
}
