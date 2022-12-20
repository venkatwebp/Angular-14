import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../shared/services/common.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 10)
  ]
  courses: {name: string}[] = [];
  currentCource : any;
  shoppingList: string = "Shopping List";

  @Input() element: string = "";
  showEdit: boolean;
  showShoppingEdit: boolean;

  constructor(private commonService: CommonService,
    private router:  Router) { }

  ngOnInit() {
    this.courses = this.commonService.courses;
    
  }

  onParent(e: Event){
    console.log('parent Child - ', e);
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  delIngredient(index: number){
    this.ingredients.splice(index);
  }

  onRecipe(){
    this.router.navigate(['recipe']);
  }

  showCourse(index: number){
    this.showEdit = true;
    this.commonService.showShoppingEdit = true;
    this.currentCource = this.courses[index];
  }

}
