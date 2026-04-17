import { Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  private readonly itemsSignal = signal<CartItem[]>([
    { id: 101, name: 'Wireless Mouse', price: 19.99, quantity: 1 },
    { id: 102, name: 'USB-C Cable', price: 9.99, quantity: 2 },
  ]);

  readonly items = this.itemsSignal.asReadonly();

  addItem(item: CartItem): void {
    const existing = this.itemsSignal().find((value) => value.id === item.id);
    if (existing) {
      this.itemsSignal.update((items) =>
        items.map((value) =>
          value.id === item.id ? { ...value, quantity: value.quantity + item.quantity } : value,
        ),
      );
    } else {
      this.itemsSignal.update((items) => [...items, item]);
    }
    this.emitCartUpdated();
  }

  removeItem(itemId: number): void {
    const removed = this.itemsSignal().find((item) => item.id === itemId);
    if (!removed) return;
    this.itemsSignal.update((items) => items.filter((item) => item.id !== itemId));
    window.dispatchEvent(new CustomEvent('quickcart:itemRemoved', { detail: removed }));
    this.emitCartUpdated();
  }

  totalItems(): number {
    return this.itemsSignal().reduce((sum, item) => sum + item.quantity, 0);
  }

  totalPrice(): number {
    return this.itemsSignal().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  private emitCartUpdated(): void {
    window.dispatchEvent(
      new CustomEvent('quickcart:cartUpdated', {
        detail: {
          items: this.itemsSignal(),
          totalItems: this.totalItems(),
          totalPrice: this.totalPrice(),
        },
      }),
    );
  }
}
