import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';


@NgModule({
  declarations: [
    ShoppingDetailsComponent
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
