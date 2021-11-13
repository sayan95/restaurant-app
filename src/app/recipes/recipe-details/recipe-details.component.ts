import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'coffeco-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input('recipeItem') recipe: Recipe; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
