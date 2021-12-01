import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'coffeco-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeChangeSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeChangeSubscription = this.recipeService.recipeChanged.subscribe(recipes => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNavigate(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void{
    this.recipeChangeSubscription.unsubscribe();
  }
}
