import { EventEmitter } from "@angular/core";
import { Recipe } from "./models/recipe.model";

export class RecipeService {
  recipeSelector = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is smiply a test recipe', 'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg'),
  ];

  getRecipes(){
    return this.recipes.slice();
  }


}
