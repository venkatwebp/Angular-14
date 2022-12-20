import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
//   @Input() recipes!: Recipe[];
//   @Output() selectItemDes = new EventEmitter<number>();

@Output() recipeWasSelected = new EventEmitter<any>();

  recipes: Recipe[] | undefined;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    // const id = this.route.snapshot.params['id'];
  }
  
  onSelectedRecipe(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
