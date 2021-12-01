import { FormGroup } from "@angular/forms";
import { Recipe } from "src/app/recipes/models/recipe.model";

export class RecipeformMapper{
    public static mappedRecipe: Recipe;
    
    public static map(id?: number, recipeform?: FormGroup): Recipe{
        this.mappedRecipe = new Recipe(
            id,
            recipeform.value['recipeName'],  
            recipeform.value['recipeDescription'],  
            recipeform.value['recipeImagePath'],  
            recipeform.value['recipeIngridients'],  
        );

        return this.mappedRecipe;
    }
}