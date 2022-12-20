import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingDetailsComponent } from './shopping-details/shopping-details.component';
import { ShoppingListComponent } from './shopping-list.component';
console.log('shopping details');
const routes: Routes = [
  { path: '', component: ShoppingListComponent },
  { path: 'details', component: ShoppingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
