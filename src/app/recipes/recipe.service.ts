import { EventEmitter, Injectable } from "@angular/core";
import { Ingridient } from "../shared/models/ingridient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./models/recipe.model";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService){}
  
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Test Recipe', 
      'This is smiply a test recipe', 
      'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
      [
        new Ingridient('Meat', 1),
        new Ingridient('French Fries', 20)
      ]
    ),
    new Recipe(
      2,
      'Test Recipe2', 
      'This is smiply a test recipe', 
      'https://www.seriouseats.com/thmb/c4HPtJ0K8t3xZ7R9zG3_3aZZass=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__03__20170210-chicken-massaman-emily-matt-clifton-4-c06cb34b4f8f43ba8de192b3b0dae768.jpg',
      [
        new Ingridient('Buns', 2),
        new Ingridient('Meat', 1)
      ]
    ),
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes.find(s => s.id === id);
  }

  addIngridientsToShoppingList(ingridients: Ingridient[]){
    this.shoppingListService.addIngridients(ingridients);
  }
}
