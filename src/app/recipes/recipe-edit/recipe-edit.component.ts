import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeEditFormGroup } from '../form-groups/recipe-edit-form-group';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'coffeco-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  isEditModeOn: boolean = false;
  routeParamSubscription: Subscription;
  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService){ }

  ngOnInit(): void {
    this.routeParamSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = (<number>params['id']);
        this.isEditModeOn = params['id'] != null; 
        this.initForm();
      }
    );
  }

  get recipeIngridients(){
    return RecipeEditFormGroup.getIngridentArrayControls();
  }


  onSubmit(): void{
    console.log(this.recipeEditForm);
  }

  private initForm(): void {
    let recipe: Recipe;
    if(this.isEditModeOn){
      recipe = this.recipeService.getRecipe(this.id)?? null;
    }
    this.recipeEditForm = RecipeEditFormGroup.initForm(recipe);
  }

  onAddIngridient(){
    this.recipeEditForm = RecipeEditFormGroup.addIngridientControl();
  }


  ngOnDestroy(){
    this.routeParamSubscription.unsubscribe();
  }

}
