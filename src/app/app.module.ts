import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// app component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import ShoppingListComponent from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AppRoutingModule } from './routing/app.routing.module';
import { TextControlComponent } from './shared/controls/text-control/text-control.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ButtonComponent } from './shared/controls/button/button.component';
import { ButtonGroupComponent } from './shared/controls/button-group/button-group.component';
import { TextAreaComponent } from './shared/controls/text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    TextControlComponent,
    ButtonComponent,
    ButtonGroupComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
