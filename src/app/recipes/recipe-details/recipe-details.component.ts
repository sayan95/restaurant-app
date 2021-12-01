import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'coffeco-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe; 
  routeParamsSubscription: Subscription;
  
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);
    });  
  }

  OnAddToShoppingList(): void{
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingridients);
  }

  onNavigateToEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  } 

  onDelete(): void{
    this.recipeService.deleteRecipe(this.route.snapshot.params[+'id']);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy(): void{
    this.routeParamsSubscription.unsubscribe();
  }
}
