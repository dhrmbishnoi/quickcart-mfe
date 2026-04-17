import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing-module';
import { CartShell } from './components/cart-shell/cart-shell';

@NgModule({
  declarations: [],
  imports: [CommonModule, CartRoutingModule, CartShell],
})
export class CartModule {}
