import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartShell } from './components/cart-shell/cart-shell';

const routes: Routes = [{ path: '', component: CartShell }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
