import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeformMapper } from 'src/app/shared/mappers/recipe-form-mapper';
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
              private recipeService: RecipeService,
              private router: Router){ }

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
    if(this.isEditModeOn){
      const recipe = RecipeformMapper.map(this.id, this.recipeEditForm)
      this.recipeService.updateRecipe(this.id, recipe);
    }else{
      const recipe = RecipeformMapper.map(
        (this.recipeService.getRecipes().length) + 1,
        this.recipeEditForm)
      this.recipeService.addRecipe(recipe);
    }
    this.onCancel();
  } 

  onCancel(): void{
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm(): void {
    let recipe: Recipe;
    if(this.isEditModeOn){
      recipe = this.recipeService.getRecipe(this.id)?? null;
    }
    this.recipeEditForm = RecipeEditFormGroup.initForm(recipe);
  }

  onAddIngridient(): void{
    this.recipeEditForm = RecipeEditFormGroup.addIngridientControl();
  }

  onDeleteIngridient(index: number): void{
    this.recipeEditForm = RecipeEditFormGroup.deleteIngridientControl(index);
  }

  onClearAllIngridients(): void{
    this.recipeEditForm = RecipeEditFormGroup.clearAllIngridientControl();
  }

  ngOnDestroy(){
    this.routeParamSubscription.unsubscribe();
  }

}
