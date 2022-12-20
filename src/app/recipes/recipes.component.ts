import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { UsersService } from '../shared/services/users.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  @Input('pgHeading') pgHeading: any;
  actUsers: any = [];

  selectedRecipe: any;
  private firstObsSubscription: Subscription;

  
  // recDetails: Recipe= this.recipes[0];

   
  constructor(private userService: UsersService) { }

  ngOnInit() { 
    this.actUsers = this.userService.actUsers;
    this.firstObsSubscription = interval(1000).subscribe((count): void=>{
      console.log(count);
    })
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }

  // selectedRecipe(recipeIndex: any){
  //   this.recDetails = this.recipes[recipeIndex];
  //   console.log(recipeIndex);    
  // }

}
