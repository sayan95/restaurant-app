import { Routes } from "@angular/router";
import { RecipeDetailsComponent } from "../recipes/recipe-details/recipe-details.component";
import { RecipeStarterComponent } from "../recipes/recipe-starter/recipe-starter.component";
import { RecipesComponent } from "../recipes/recipes.component";
import { ShoppingListComponent } from "../shopping-list/shopping-list.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStarterComponent},
        { path: ':id', component: RecipeDetailsComponent}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
];