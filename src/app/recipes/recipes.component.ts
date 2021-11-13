import { Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'coffeco-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  loadedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  loadSelectedRecipe(recipe: Recipe){
    this.loadedRecipe = recipe;
  }
}
