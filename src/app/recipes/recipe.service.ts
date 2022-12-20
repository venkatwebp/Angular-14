import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Text Recipe', 'This is simply a test', 
    'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg', 0),
    new Recipe('A Another Text Recipe', 'This is simply a test', 
    'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg', 1)
  ]

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
