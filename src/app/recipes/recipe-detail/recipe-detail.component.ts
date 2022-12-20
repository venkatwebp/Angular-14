import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  @ViewChild('fullScreen') fullScreen: any;
  @ViewChild('fullScreenIcon') fullScreenIcon: any; 

  constructor() { }

  ngOnInit(): void {
  }

  fullImage(){
    this.fullScreen.nativeElement.style.maxHeight = '600px';
  }

}
