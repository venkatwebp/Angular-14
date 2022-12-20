import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: any;
@Output() recipeSelected = new EventEmitter<number>();


 constructor() { }

 ngOnInit(): void {
  
    let items: any = [
      {id: 1, name: "mangoes", price: "80"},
      {id: 2, name: "bananas", price: "45"},
      {id: 3, name: "grapes", price: "90"}
    ]
    console.log(items);
   
    
    let app = document.querySelector('#app');
    items.forEach((item:any) => {
      if(app){
        app.innerHTML += `<li>${item.name} : ${item.price} </li>`
      }
    });
  }

  onSelected(){
    this.recipeSelected.emit(this.recipe.id);
  }
  
}
