import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-mini-cart-list',
  imports: [CurrencyPipe],
  templateUrl: './mini-cart-list.html',
  styleUrl: './mini-cart-list.scss',
})
export class MiniCartList implements OnInit {
  private readonly cartService = inject(Cart);
  readonly items = computed(() => this.cartService.items());

  ngOnInit(): void {
    window.dispatchEvent(new CustomEvent('dummy-one', { detail: {path: 'test'} }));
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item.id);
  }

  addItem(): void {
    const id = Date.now();
    this.cartService.addItem({
      id,
      name: `Demo Item ${String(id).slice(-4)}`,
      price: 14.5,
      quantity: 1,
    });
  }
}
