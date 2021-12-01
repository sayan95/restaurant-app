import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingridient } from "../shared/models/ingridient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./models/recipe.model";

import dummyRecipes from './recipes.json';

@Injectable({providedIn: 'root'})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService){}
  
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     1,
  //     'Test Recipe', 
  //     'This is smiply a test recipe', 
  //     'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
  //     [
  //       new Ingridient('Meat', 1),
  //       new Ingridient('French Fries', 20)
  //     ]
  //   ),
  //   new Recipe(
  //     2,
  //     'Test Recipe2', 
  //     'This is smiply a test recipe', 
  //     'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
  //     [
  //       new Ingridient('Buns', 2),
  //       new Ingridient('Meat', 1)
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = dummyRecipes;

  recipeChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe{
    return this.recipes.find(s => s.id == id);
  }

  addIngridientsToShoppingList(ingridients: Ingridient[]): void{
    this.shoppingListService.addIngridients(ingridients);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.getRecipes());
  }

  updateRecipe(id: number, newRecipe: Recipe): void{
    console.log(this.recipes)
    const index = this.recipes.findIndex(r => id);
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.getRecipes());
  }

  deleteRecipe(id: number): void{
    const recipe = this.recipes.findIndex(r => r.id == id);
    this.recipes.splice(recipe, 1);
    this.recipeChanged.next(this.getRecipes());
  }
}
